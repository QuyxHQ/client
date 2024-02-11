import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  path: string;
};

type FooterGroup = {
  heading: string;
  links: FooterLink[];
};

const socialIcons = [
  "/Icons/twitter.svg",
  "/Icons/reddit.svg",
  "/Icons/telegram.svg",
  "/Icons/discord.svg",
  "/Icons/youtube.svg",
];

const footerGroup: FooterGroup[] = [
  {
    heading: "####",
    links: [
      {
        label: "About Us",
        path: "/",
      },
      {
        label: "Pricing",
        path: "/",
      },
      {
        label: "Contact Us",
        path: "/",
      },
      {
        label: "Features",
        path: "/",
      },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        label: "Tutorials",
        path: "/",
      },
      {
        label: "FAQs",
        path: "/",
      },
      {
        label: "Quyx SDKs",
        path: "/",
      },
      {
        label: "Docs",
        path: "/",
      },
    ],
  },
  {
    heading: "Ecosystem",
    links: [
      {
        label: "Wallets",
        path: "/",
      },
      {
        label: "Whitepaper",
        path: "/",
      },
     
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-500 pt-10 text-zinc-400">
      <div className="max-w-[1024px] mx-auto md:py-3 space-y-4">
        <div className="justify-start ml-[2rem] md:py-6 py-3 flex items-center md:justify-start">
          <div>
            <Link href={"/"}>
              <Image
                src={"/Images/logo-full.svg"}
                width={80}
                height={80}
                alt="logo"
              />
            </Link>
          </div>
        </div>

        <div className="px-8 md:py-12 md:border-y border-zinc-500 flex-wrap flex justify-between gap-2">
          {footerGroup.map((group, id) => (
            <div key={id} className="space-y-4">
              <p className="text-white text-lg">{group.heading}</p>
              <div className="space-y-4 text-[14px] text-zinc-500 md:text-base">
                {group.links.map((link, id) => (
                  <div key={id}>
                    <Link href={link.path}>{link.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="py-10 px-8 flex flex-col md:flex-row md:space-y-8 space-y-4 items-center justify-between">
          <div className="flex items-center space-x-3">
            <p className="text-[14px] md:text-base">Privacy policy</p>
            <p>|</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="flex items-center md:justify-center">
            <div className="flex justify-center item-center space-x-4 md:justify-start">
              {socialIcons.map((path, i) => (
                <Image src={path} key={i} alt="icon" width={20} height={20} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
