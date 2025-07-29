import Link from "next/link";

export default function Navigation() {
  const links = [
    { label: "Home", url: "#" },
    { label: "About", url: "#about" },
    { label: "Projects", url: "#projects" },
    { label: "Contact", url: "#contact" },
  ];
  return (
    <>
      {/* Navigation */}
      <header className="bg-black">
        <nav className="mx-auto flex items-center justify-center p-6 lg:px-12">
          <div className="flex lg:flex-1">
            <Link className="text-white text-[20px]" href="">
              by zoe.
            </Link>
          </div>
          <div className="">
            {links.map((item) => (
              <Link
                href={item.url}
                className="bg-pink-300 hover:bg-white active:bg-gray-50 px-6 py-2 rounded-full text-black mr-2 text-[14px] lowercase"
              >
                / {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {/* Hero */}
      <section className="w-full h-screen justify-center items-center flex">
        <div className="text-center">
          <h1>everything </h1>
          <h1>by zoe</h1>
        </div>
      </section>
    </>
  );
}
