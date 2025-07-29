import Link from "next/link";
import Image from "next/image";
import { X, Linkedin, Github, } from "../../public/icons/icons";

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
      image: "/project-2.jpg",
      url: "#",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, inventore dignissimos!",
      category: "web development",
    },
    {
      name: "lorem ipsum",
      image: "/project-1.jpg",
      url: "#",
      description:
        "Fugit dignissimos excepturi recusandae voluptatibus, minima quidem rerum modi.",
      category: "web development",
    },
    {
      name: "lorem ipsum dolor",
      image: "/project.jpg",
      url: "#",
      description:
        "dolorum omnis exercitationem eligendi enim explicabo deserunt fuga nobis pariatur.",
      category: "web development",
    },
  ];
  const contacts = [
    {
      name: "Email",
      value: "zoe@berthengineering.com",
      url: "mailto:zoe@berthengineering.com",
    },
    { name: "Phone", value: "+12345678190", url: "tel:+12345678910" },
    { name: "Resume", value: "Have my profile at your fingertips", url: "#" },
  ];
  const socials = [
    { name: "X", icon: <X />, url: "#", username: "byzoe.xo", },
    { name: "LinkedIn", icon: <Linkedin /> , url: "#", username: "", },
    { name: "Github", icon: <Github /> , url: "#", username: "zani0", },
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
                key={item.label}
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
        className="mx-auto flex bg-black justify-center items-center w-full py-6 px-6 lg:min-h-[600px]"
      >
        <div className="max-w-7xl text-white items-center justify-center text-center lg:text-[20px] text-[14px]">
          <h1 className="lg:text-[35px] text-[20px] text-pink-300 mb-6">
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
        className="mx-auto max-w-7xl bg-black justify-center items-center w-full py-6 px-6 lg:min-h-[600px]"
      >
        <h1 className="lg:text-[35px] text-[20px] text-center text-pink-300 mb-6">
          projects i've worked on/
        </h1>
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <figure
              key={item.name}
              className="relative max-w-full min-h-[400px] transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            >
              <Link href="#">
                <Image
                  className="rounded-lg"
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={200}
                />
              </Link>
              <figcaption className="absolute px-4 lowercase text-white bottom-6">
                <h1 className="lg:text-[25px] text-[18px]">{item.name}</h1>
                <p className="lg:text-[14px] text-[14px] mb-4">
                  {item.description}
                </p>
                <Link
                  href={item.url}
                  className="bg-white text-black hover:bg-pink-300/70 transition-all px-6 py-3 rounded-full block w-full text-center"
                >
                  See more
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      {/* contact */}
      <section id="contact" className="m-auto max-w-7xl bg-black justify-center items-center w-full py-6 px-6 lg:min-h-[600px]">
        <h1 className="lg:text-[35px] text-[20px] text-center text-pink-300 mb-6">
          contact/
        </h1>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="w-full">
            <Image src={"/project.jpg"} alt="" className="w-full h-[500px] object-cover" width={400} height={400} />
          </div>
          <div className="px-20">
            <h1 className="lg:text-[35px]">Need any of my services?</h1>
            <p className="lg:text-[20px]">Let me turn your ideas into code.</p>
            <div className="my-6">
              <ul>
                {contacts.map((item) => (
                  <li className="mb-2 text-[18px]" key={item.name}>
                    {item.name}: <Link className="hover:underline transition-all underline-offset-8" href={item.url}>{item.value}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex gap-2">
                {socials.map((item) => (
                  <li key={item.name}>
                    <Link className="flex w-[50px] h-[50px] bg-pink-300 hover:bg-pink-300/70 transition-all items-center justify-center rounded-full"  target="_blank" href={item.url}>{item.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
