import Link from "next/link";

export default function Navigation() {
  return (
    // Navigation
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-6">
        <div className="flex lg:flex-1">
          <Link href="">by zoe</Link>
        </div>
        <Link href="#" className="text-white">home</Link>
        <Link href="#" className="text-white">about</Link>
        <Link href="#" className="text-white">project</Link>
        <Link href="#" className="text-white">contact</Link>
      </nav>
    </header>
  );
}
