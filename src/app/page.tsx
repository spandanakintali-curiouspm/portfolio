import Certifications from "@/components/Certifications";
import DynamicTagline from "@/components/DynamicTagline";
import Education from "@/components/Education";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileIntro from "@/components/ProfileIntro";
import Quote from "@/components/Quote";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-10 flex flex-col gap-16 md:gap-20">
          <ProfileHeader />
          <ProfileIntro />
          <ExperienceTimeline />
          <Stack />
          <DynamicTagline />
          <Certifications />
          <Education />
          <Quote />
        </div>
      </main>
      <Footer />
    </>
  );
}
