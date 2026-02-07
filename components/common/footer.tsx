import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 py-7">
      <div className="container mx-auto px-6 flex justify-around items-center">
        <div className="flex justify-between">
          <h2>My Portfolio</h2>
          <p>Cebu City</p>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Blog 1</Link>
            </li>
            <li>
              <Link href="/about">Blog 2</Link>
            </li>
            <li>
              <Link href="/projects">Blog 3</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li>Email: test@gmail.com</li>
            <li>Phone: 123 123 123</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
