import { Link } from "react-router-dom";

//Import Images
import HeroSectionImage from "/images/casual-life-3d-woman-taking-funny-photo-with-dog_result.svg";

const HeroSection = () => {
  return (
    <main className="flex flex-col-reverse px-5 py-20 gap-y-10 md:flex-row md:justify-between md:items-center md:py-32 xl:py-40 sm:px-10 md:px-15 xl:px-20 background border-y border-bgDark">
      <div className="w-full md:w-[48%] xl:w-[45%] h-auto backdrop-blur-sm bg-white/30 rounded-2xl p-8">
        <img
          src={HeroSectionImage}
          alt="Hero Section Image"
          className="w-[32rem] mx-auto"
        />
      </div>

      <div className="w-full flex flex-col md:w-[48%] xl:w-[45%] text-sm md:text-base xl:text-lg">
        <h1 style={{"marginBottom": "10px"}} className="text-2xl font-semibold lg:text-4xl xl:text-5xl">
          Empowering Brands and Creators through Blockchain Innovation
        </h1>
        <p className="mt-2 text-base font-medium lg:text-lg xl:text-xl">
          Create, share, and measure campaign success effortlessly.
        </p>
        <p className="mt-6 lg:mt-10 md:text-sm lg:text-lg">
        Join AFF today and be part of the future of brand campaigns, where transparency, security, and creativity converge in one ATL5D Discord.
        </p>
        <div className="flex justify-between mt-10 space-x-4 lg:mt-14">
          <Link to="create" className="w-40 py-3 text-center duration-300 bg-white text-primaryBlue rounded-xl hover:-translate-y-1 hover:translate-x-1">
            Get Started
          </Link>
          <Link to="view" className="w-40 py-3 text-center duration-300 bg-white text-primaryBlue rounded-xl hover:-translate-y-1 hover:translate-x-1">
            Submit content
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
