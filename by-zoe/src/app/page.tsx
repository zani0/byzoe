import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const links = [
    { label: "Home", url: "#home" },
    { label: "About", url: "#about" },
    { label: "Projects", url: "#projects" },
    { label: "Contact", url: "#contact" },
  ];
  const projects = [
    {
      name: "lorem",
      image: "/project.jpg",
      url: "#",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit dignissimos excepturi recusandae voluptatibus, minima quidem rerum modi, dolorum omnis exercitationem eligendi enim explicabo deserunt fuga nobis pariatur. Obcaecati, inventore dignissimos!",
      category: "web development",
    },
    {
      name: "lorem",
      image: "/project.jpg",
      url: "#",
      description: "lorem ipsum",
      category: "web development",
    },
    {
      name: "lorem",
      image: "/project.jpg",
      url: "#",
      description: "lorem ipsum",
      category: "web development",
    },
  ];
  return (
    <>
      {/* navigation */}
      <header className="bg-black/50 backdrop-blur-lg mx-auto sticky top-0">
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
          <h1 className="lg:text-[25px] text-[20px] text-pink-300">
            yes, i type in lowercase.
          </h1>
        </div>
      </section>

      {/* about */}
      <section
        id="about"
        className="flex bg-black justify-center items-center w-full py-6 px-6 min-h-[400px]"
      >
        <div className="max-w-7xl text-white items-center justify-center text-center lg:text-[20px] text-[14px]">
          <h1 className="lg:text-[25px] text-[20px] text-pink-300 mb-6">
            about me/
          </h1>
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

      {/* projects */}
      <section
        id="projects"
        className="mx-auto max-w-7xl bg-black justify-center items-center w-full py-6 px-6 min-h-[400px]"
      >
        <h1 className="lg:text-[25px] text-[20px] text-center text-pink-300 mb-6">
          projects i've worked on/
        </h1>
        <div className="grid lg:grid-cols-3 gap-4">
          {projects.map((item) => (
            <div className="max-w-full">
              <div className="w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={120}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="">{item.description}</p>
                <Link href={item.url}>see more</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
