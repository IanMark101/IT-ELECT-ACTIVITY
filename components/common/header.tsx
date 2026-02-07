import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../theme-toggle";
export default function Header() {
  return (
    <div className="border-b border-gray-700 py-6">
      <div className="container mx-auto px-6 flex justify-around items-center">
        <div>
          <h1 className="font-bold">portfolio</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="blog">Blogs</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Button>Contact</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
