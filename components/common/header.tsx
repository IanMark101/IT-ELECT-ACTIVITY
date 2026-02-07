import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../theme-toggle";
export default function Header() {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-6 shadow-sm">
      <div className="container mx-auto px-6 flex justify-around items-center">
        <div>
          <h1 className="font-bold text-xl text-slate-900 dark:text-slate-50">
            portfolio
          </h1>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="blog"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200">
            Contact
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
