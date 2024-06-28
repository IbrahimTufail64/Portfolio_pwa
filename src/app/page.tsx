import Image from "next/image";
import Link from "next/link";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="bg-primary min-h-[120vh] rounded-b-[100px]">
        <header className="flex justify-between py-16 px-20 ">
          <div>ibrahimkhudai03@gmail.com</div>
          <div className="flex space-x-5">
            <Link href='/' className="border-r pr-6">Contact Me</Link>
            <Link href='/' className="border-r pr-6">LinkedIn</Link>
            <Link href='/'>My Work</Link>
          </div>
        </header>
        <Hero/>
      </div>
      <About/>
      <Services/>
      <Work/>
    </main>
  );
}
