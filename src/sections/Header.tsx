import ArrowRight from "@/assets/arrow-right.svg";
import logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div
        className="bg-black text-white flex 
      justify-center items-center py-3 text-sm gap-3"
      >
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5 px-2">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="saas-logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn btn-primary">
                Get for free
              </button>
            </nav>
          </div>
        </div>
    </header>
  );
};
