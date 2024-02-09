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
        label: "Feaures",
        path: "/",
      },
    ],
  },
  {
    heading: "Resources",
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
        label: "Feaures",
        path: "/",
      },
    ],
  },
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
        label: "Feaures",
        path: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-500 pt-10 text-zinc-400">
      <div className="max-w-[1024px] mx-auto py-3 space-y-4">
        <div className="py-6 w-fit">
          <Link href={"/"}>
            <Image
              src={"/Images/logo-full.svg"}
              width={80}
              height={80}
              alt="logo"
            />
          </Link>
        </div>

        <div className="px-8 py-12 border-y border-zinc-500 flex justify-between gap-2">
          {footerGroup.map((group, id) => (
            <div key={id} className="space-y-4">
              <p className="text-white text-lg">{group.heading}</p>
              <div className="space-y-4 text-zinc-500">
                {group.links.map((link, id) => (
                  <div key={id}>
                    <Link href={link.path}>{link.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="py-10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <p>Privacy policy</p>
            <p>|</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="flex item-center space-x-4">
            {socialIcons.map((path, i) => (
              <Image src={path} key={i} alt="icon" width={20} height={20} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
