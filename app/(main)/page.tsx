import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ElevatedButton } from "@/components/ui/elevated-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col font-inter text-foreground text-center  items-center justify-between p-24">
        <section className="flex max-w-[575px] flex-col items-center gap-7 w-4/5  justify-between">
          <h1 className="text-7xl font-semibold">Get things done your way.</h1>
          <h3 className="text-xl opacity-50  font-medium">
            Your workflow, your rules. Shape your day with tools designed to fit
            your unique style.
          </h3>
          <ElevatedButton>Start for free</ElevatedButton>
        </section>
      </main>
    </>
  );
}
