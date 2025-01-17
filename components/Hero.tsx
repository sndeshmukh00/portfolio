import { SparklesCore } from "@/components/ui/Sparkles";
import { FlipWords } from "@/components/ui/FlipWords";

const Hero = () => {
  const words = ["Hi! I'm Shesh Narayan Deshmukh"];
  const tenXWords = [
    "awesome",
    "super sleek",
    "faster",
    "visually stunning",
    "more efficient",
    "future ready",
    "more user friendly",
    "ultra modern",
    "more responsive",
    "performance optimized",
    "growth focused",
    "more innovative",
  ];

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-6xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20 mt-30">
        <div className="flex header-container">
          <div className="subtitle-box ">
            <FlipWords duration={3000} words={words} className="text-center" />
          </div>
        </div>
      </h1>
      <h3 className="md:text-xl text-sm lg:text-xl font-medium text-center relative z-20 text-gray-400 mt-4 max-w-7xl mb-2 lg:mb-4 pl-8 pr-8">
        <p className="leading-relaxed">
          A <span className="text-white font-medium">Software Developer</span>{" "}
          specializing in <span className="text-white">frontend</span> and{" "}
          <span className="text-white">mobile app</span> development.
        </p>
      </h3>
      <p className="md:text-xl text-sm lg:text-xl font-medium text-center relative z-20 text-gray-400 mt-4 max-w-7xl">
        I build websites that are
      </p>
      <h4 className="md:text-2xl text-xl lg:text-4xl font-bold text-center text-white relative z-20 mt-30 -mt-0">
        10x
        <FlipWords duration={1000} words={tenXWords} className="text-center" />
      </h4>

      <div className="w-full h-40 relative">
        {/* Gradients */}
        <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.1}
          maxSize={1}
          particleDensity={2000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Hero;
