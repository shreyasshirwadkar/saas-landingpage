import logo from "@/assets/logosaas.png";
import Socialx from "@/assets/social-x.svg";
import Socialinsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYt from "@/assets/social-youtube.svg";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="px-1">
        <div className="inline-flex relative before:top-2 before:bottom-0 before:blur before:content-[''] before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logo}
            alt="logo"
            height={40}
            width={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Socialx />
          <Socialinsta />
          <SocialYt />
          <SocialPin />
          <SocialLinkedin />
        </div>
        <p className="mt-6">&copy; 2025 Leo,Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
