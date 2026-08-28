import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileIntro from "@/components/ProfileIntro";
import Quote from "@/components/Quote";
import Stack from "@/components/Stack";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <main id="top" className="flex-1">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 flex flex-col gap-16 md:gap-20">
          <div className="flex flex-col gap-6">
            <ProfileHeader />
            <ProfileIntro />
          </div>
          <ExperienceTimeline />
          <Stack />
          <Stats />
          <Certifications />
          <Education />
          <Quote />
        </div>
      </main>
      <Footer />
    </>
  );
}
