"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const socialLinks = [
  { name: "facebook", link: "/", icon: FaFacebook },
  { name: "twitter", link: "/", icon: FaTwitter },
  { name: "instagram", link: "/", icon: FaInstagram },
  { name: "linkedin", link: "/", icon: FaLinkedin },
];

const SocialIcon = ({
  name,
  link,
  icon: Icon,
}: {
  name: string;
  link: string;
  icon: IconType;
}) => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer transition duration-300 hover:scale-105"
      onClick={() => router.push(link)}
    >
      <Icon className="size-5" />
    </div>
  );
};

const Header = () => {
  return (
    <div className="relative bg-brand py-2">
      <div className="width-container">
        <div className="flex items-center justify-between">
          <div className="font-medium">Header content</div>
          <div className="hidden md:flex gap-8">
            {socialLinks.map(({ name, link, icon }) => (
              <SocialIcon key={name} name={name} link={link} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
