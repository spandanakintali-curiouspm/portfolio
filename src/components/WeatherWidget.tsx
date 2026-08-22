"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const DEFAULT_CITY = profile.location.split(",")[0].trim();

interface WeatherState {
  temperature: number;
  code: number;
  isDefaultLocation: boolean;
}

function describeWeatherCode(code: number): { icon: string; label: string } {
  if (code === 0) return { icon: "☀️", label: "Clear sky" };
  if (code === 1 || code === 2) return { icon: "🌤️", label: "Partly cloudy" };
  if (code === 3) return { icon: "☁️", label: "Overcast" };
  if (code === 45 || code === 48) return { icon: "🌫️", label: "Foggy" };
  if ([51, 53, 55, 56, 57].includes(code)) return { icon: "🌦️", label: "Drizzle" };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { icon: "🌧️", label: "Rain" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { icon: "❄️", label: "Snow" };
  if ([95, 96, 99].includes(code)) return { icon: "⛈️", label: "Thunderstorm" };
  return { icon: "🌡️", label: "Weather" };
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchWeather = async (
      latitude: number,
      longitude: number,
      isDefaultLocation: boolean,
    ) => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`,
        );
        if (!res.ok) throw new Error("Weather request failed");
        const data = await res.json();
        if (cancelled) return;
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          code: data.current.weather_code,
          isDefaultLocation,
        });
      } catch {
        if (!cancelled) setFailed(true);
      }
    };

    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude, false),
        () =>
          fetchWeather(
            profile.coordinates.latitude,
            profile.coordinates.longitude,
            true,
          ),
        { timeout: 5000 },
      );
    } else {
      fetchWeather(profile.coordinates.latitude, profile.coordinates.longitude, true);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  if (failed || !weather) return null;

  const { icon, label } = describeWeatherCode(weather.code);

  return (
    <div
      title={`${label}${weather.isDefaultLocation ? ` in ${DEFAULT_CITY}` : ""}`}
      className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5 rounded-full border border-white/15 bg-neutral-800/90 px-3 py-1.5 text-sm shadow-[0_1px_12px_0_rgba(0,0,0,0.4)] backdrop-blur-md"
    >
      <span aria-hidden>{icon}</span>
      <span className="font-medium text-neutral-50">{weather.temperature}°C</span>
      {weather.isDefaultLocation && (
        <span className="text-neutral-400">· {DEFAULT_CITY}</span>
      )}
    </div>
  );
}
