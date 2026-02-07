import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 py-7 shadow-sm">
      <div className="container mx-auto px-6 flex justify-around items-center">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-slate-900 dark:text-slate-50">
            My Portfolio
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Cebu City
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-sm"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
            Blog
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/blog"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-sm"
              >
                Blog 1
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-sm"
              >
                Blog 2
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-sm"
              >
                Blog 3
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
            Contact
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="text-slate-700 dark:text-slate-300">
              Email: ianmarkbuenaflor9@gmail.com
            </li>
            <li className="text-slate-700 dark:text-slate-300">
              Phone: 09229855227
            </li>
            <li className="text-slate-700 dark:text-slate-300">IanMark101</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
