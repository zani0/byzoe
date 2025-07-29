import Link from "next/link";

export default function Navigation() {
  const links = [
    { label: "Home", url: "#home" },
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
      <section
        id="home"
        className="bg-black w-full h-screen justify-center items-center flex"
      >
        <div className="text-center justify-center items-center gap-y-0">
          <h1 className="lg:text-[25px] text-[20px] text-pink-300">
            everything/
          </h1>
          <h1 className="lg:text-[150px] text-[100px]">by zoe</h1>
          <h1 className="lg:text-[25px] text-[20px] text-pink-300">.</h1>
        </div>
      </section>
      {/* about */}
      <section
        id="about"
        className="flex bg-black justify-center items-center w-full py-6 px-6 min-h-[400px]"
      >
        <div className="max-w-7xl text-white items-center justify-center text-center lg:text-[20px] text-[14px]">
          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            dignissimos excepturi recusandae voluptatibus, minima quidem rerum
            modi, dolorum omnis exercitationem eligendi enim explicabo deserunt
            fuga nobis pariatur. Obcaecati, inventore dignissimos!
          </p>
          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            suscipit quos repudiandae. Molestiae rem autem voluptatum, quibusdam
            blanditiis aliquid fuga adipisci cupiditate quo, illo repellendus
            ipsam, dolore alias. Similique, reiciendis.
          </p>
          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            dignissimos excepturi recusandae voluptatibus, minima quidem rerum
            modi, dolorum omnis exercitationem eligendi enim explicabo deserunt
            fuga nobis pariatur. Obcaecati, inventore dignissimos!
          </p>
        </div>
      </section>
    </>
  );
}
