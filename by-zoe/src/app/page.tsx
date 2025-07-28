import Link from "next/link";

export default function Navigation() {
  const links = [
    { label: "Home", url: "#" },
    { label: "About", url: "#about" },
    { label: "Projects", url: "#projects" },
    { label: "Contact", url: "#contact" },
  ];
  return (
    // Navigation
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-6">
        <div className="flex lg:flex-1">
          <Link href="">by zoe</Link>
        </div>
        <div className="">
          {links.map((item) => (
            <Link
              href={item.url}
              className="bg-pink-300 px-6 py-2 rounded-full text-black mr-2 text-[12px] lowercase"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
