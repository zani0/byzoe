import Link from "next/link";
import Image from "next/image";
import {
  X,
  Linkedin,
  Github,
  ArrowAngularTopRight,
  Laptop2,
  PlayStore,
  Brush2,
  Play,
  ColourPalette3,
  Pencil1,
} from "../../public/icons/icons";

export default function Navigation() {
  const links = [
    { label: "Home", url: "#home" },
    { label: "About", url: "#about" },
    { label: "Services", url: "#services" },
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
  const services = [
    {
      name: "Web development",
      icon: <Laptop2 />,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis esse amet labore dolore ratione fuga itaque perferendis. Aperiam labore praesentium autem laboriosam incidunt reprehenderit illo atque explicabo porro adipisci?",
    },
    {
      name: "App development",
      icon: <PlayStore />,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis esse amet labore dolore ratione fuga itaque perferendis. Aperiam labore praesentium autem laboriosam incidunt reprehenderit illo atque explicabo porro adipisci?",
    },
    {
      name: "Graphic design",
      icon: <Brush2 />,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis esse amet labore dolore ratione fuga itaque perferendis. Aperiam labore praesentium autem laboriosam incidunt reprehenderit illo atque explicabo porro adipisci?",
    },
    {
      name: "Video editing",
      icon: <Play />,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis esse amet labore dolore ratione fuga itaque perferendis. Aperiam labore praesentium autem laboriosam incidunt reprehenderit illo atque explicabo porro adipisci?",
    },
    {
      name: "UI/UX",
      icon: <ColourPalette3 />,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis esse amet labore dolore ratione fuga itaque perferendis. Aperiam labore praesentium autem laboriosam incidunt reprehenderit illo atque explicabo porro adipisci?",
    },
    {
      name: "Creative writing",
      icon: <Pencil1 />,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis esse amet labore dolore ratione fuga itaque perferendis. Aperiam labore praesentium autem laboriosam incidunt reprehenderit illo atque explicabo porro adipisci?",
    },
  ];
  const frameworks = [
    {
      name: "React",
      logo: "/logos/React.png",
    },
    {
      name: "WordPress",
      logo: "/logos/Wordpress.png",
    },
    {
      name: "Canva",
      logo: "/logos/Canva.png",
    },
    {
      name: "CSS",
      logo: "/logos/CSS.png",
    },
    {
      name: "JavaScript",
      logo: "/logos/JavaScript.png",
    },
    {
      name: "Figma",
      logo: "/logos/Figma.png",
    },
    {
      name: "HTML",
      logo: "/logos/HTML.png",
    },
    {
      name: "TypeScript",
      logo: "/logos/TypeScript.png",
    },
    {
      name: "Squarespace",
      logo: "/logos/Squarespace.png",
    },
    {
      name: "Capcut",
      logo: "/logos/Capcut.jpg",
    },
  ];
  const contacts = [
    {
      name: "Email",
      value: "zoe@berthengineering.com",
      url: "mailto:zoe@berthengineering.com",
    },
    { name: "Phone", value: "+123 4567 81910", url: "tel:+12345678910" },
    { name: "Resume", value: "Have my profile at your fingertips", url: "#" },
  ];
  const socials = [
    { name: "X", icon: <X />, url: "#", username: "byzoe.xo" },
    { name: "LinkedIn", icon: <Linkedin />, url: "#", username: "" },
    { name: "Github", icon: <Github />, url: "#", username: "zani0" },
  ];
  return (
    <>
      {/* navigation */}
      <header className="bg-black/50 backdrop-blur-md mx-auto sticky top-0 z-999">
        {/* desktop navigation */}
        <nav className="hidden mx-auto lg:flex items-center lg:justify-center justify-between p-6 max-w-7xl">
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
                className="bg-pink-300 hover:bg-white transition-all active:bg-gray-50 px-6 py-2 rounded-full text-black mr-2 text-[14px]"
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
            (yes, i type in lowercase.)
          </h1>
        </div>
      </section>

      {/* about */}
      <section
        id="about"
        className="mx-auto flex bg-black justify-center items-center w-full py-6 px-6 lg:min-h-[600px]"
      >
        <div className="max-w-7xl text-white items-center justify-center text-center lg:text-[20px] text-[14px]">
          <h1 className="lg:text-[35px] text-[25px] text-pink-300 mb-12">
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

      {/* frameworks */}
      <section
        id="frameworks"
        className="mx-auto flex-row items-center justify-center min-h-[200px]"
      >
        <div className="mx-auto max-w-7xl">
          <ul className="flex justify-center items-center gap-7">
            {frameworks.map((item) => (
              <li key={item.name} className="">
                <Image src={item.logo} alt={item.name} width={70} height={70} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* services */}
      <section
        id="services"
        className="mx-auto my-auto max-w-7xl items-center justify-center flex-row lg:min-h-[700px]"
      >
        <div className="text-center mb-12">
          <h1 className="lg:text-[35px] text-[25px] text-center text-pink-300">
            here's what i do/
          </h1>
          <p>I'm a bit of a jack of all trades, master of all</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div key={item.name}>
              {item.icon}
              <h1 className="text-[24px]">{item.name}</h1>
              <p>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* projects */}
      <section
        id="projects"
        className="mx-auto max-w-7xl bg-black justify-center items-center w-full py-6 px-6 lg:min-h-[600px]"
      >
        <h1 className="lg:text-[35px] text-[25px] text-center text-pink-300 mb-12">
          projects i've worked on/
        </h1>
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <figure
              key={item.name}
              className="relative max-w-full min-h-[400px] transition-all duration-300 cursor-pointer filter lg:grayscale hover:grayscale-0"
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
                <div className="bg-pink-300 my-1 px-2 py-1 max-w-[120px] rounded-full items-center">
                  <p className="text-[10px] text-center text-white">
                    {item.category}
                  </p>
                </div>
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
        <div className="flex items-center justify-center mt-12">
          <Link
            className="bg-black w-[10vw] border-white hover:border-white/80 border-solid border-2 inline-flex justify-between items-center transition-all hover:bg-black/60 active:bg-gray-50 px-6 py-3 rounded-full text-white hover:text-white/80 text-[16px] text-center"
            href={"/projects"}
          >
            <span>See all projects</span>
            <i>
              <ArrowAngularTopRight />
            </i>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <hr className="my-28 w-[10%] border-t border-gray-300/30 border-2" />
        </div>
      </section>

      {/* contact */}
      <section
        id="contact"
        className="m-auto max-w-7xl bg-black justify-center items-center w-full py-6 px-6 lg:min-h-[600px]"
      >
        <h1 className="lg:text-[35px] text-[25px] text-center text-pink-300 mb-12">
          contact/
        </h1>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="w-full">
            <Image
              src={"/project.jpg"}
              alt=""
              className="w-full h-[500px] object-cover"
              width={400}
              height={400}
            />
          </div>
          <div className="lg:px-20">
            <h1 className="lg:text-[35px]">Need any of my services?</h1>
            <p className="lg:text-[20px]">Let me turn your ideas into code.</p>
            <div className="my-6">
              <ul>
                {contacts.map((item) => (
                  <li className="mb-2 text-[18px]" key={item.name}>
                    {item.name}:{" "}
                    <Link
                      className="hover:underline transition-all underline-offset-8"
                      href={item.url}
                    >
                      {item.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex gap-2">
                {socials.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="flex w-[50px] h-[50px] bg-pink-300 hover:bg-pink-300/70 transition-all items-center justify-center rounded-full"
                      target="_blank"
                      href={item.url}
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <section id="footer" className="py-6">
        <div className="text-center">
          <p className="text-white">&copy; 2025 by zoe.</p>
        </div>
      </section>
    </>
  );
}
