import Link from "next/link";

export default function Navigation() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-6">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Project</Link>
        <Link href="#">Contact</Link>
      </nav>
    </header>
  );
}
