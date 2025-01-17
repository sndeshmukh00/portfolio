import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto">
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
}
