import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-8 px-4">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
