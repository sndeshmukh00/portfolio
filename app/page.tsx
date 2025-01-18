import Hero from "@/components/Hero";
import FloatingGradientButton from "@/components/ui/FloatingGradientButton";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingGradientButton extraClassName="md:bottom-12 md:right-12 m-0">
          Hire Me
        </FloatingGradientButton>
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
          ]}
        />
        <Hero />
      </div>
    </main>
  );
}
