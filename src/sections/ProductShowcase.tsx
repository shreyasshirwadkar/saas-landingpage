import ProductImage from "@/assets/product-image.png";
import Image from "next/image";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 px-4 flex flex-col justify-center items-center overflow-x-clip">
      <div className="px-1">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <div className="mt-5 section-title ">
            A more effective way to track progress
          </div>
          <div className="mt-5 section-description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={ProductImage}
          alt="ProductImage"
          className="mt-10"
          width={1098}
        />
        <Image
          src={PyramidImage}
          alt="PyramidImage"
          width={262}
          className="hidden md:block absolute -top-32 -right-36"
        />
        <Image
          src={TubeImage}
          alt="TubeImage"
          width={248}
          className="hidden md:block absolute bottom-24  -left-36"
        />
      </div>
    </section>
  );
};
