import Link from "next/link";
import { DarkMode } from "./components/DarkMode";

export default function Home() {
  return (
   <main className="flex justify-around items-center mx-16 my-3">
    <Link href={'/'}>
    <h1 className="text-2xl">MarketPlace</h1>
    </Link>
    <DarkMode />
   
   </main>
  );
}
