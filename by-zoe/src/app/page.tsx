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
      {/* navigation */}
      <header className="bg-black">
        {/* desktop navigation */}
        <nav className="hidden mx-auto lg:flex items-center lg:justify-center justify-between p-6 lg:px-16">
          <div className="flex lg:flex-1">
            <Link className="text-white text-[20px]" href="#">
              by-zoe
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
      {/* hero */}
      <section className="w-full h-screen justify-center items-center flex">
        <div className="text-center justify-center items-center gap-y-0">
          <h1 className="lg:text-[25px] text-[20px] text-pink-300">everything/</h1>
          <h1 className="lg:text-[150px] text-[100px]">by zoe</h1>
          <h1 className="lg:text-[25px] text-[20px] text-pink-300">.</h1>
        </div>
      </section>
    </>
  );
}
