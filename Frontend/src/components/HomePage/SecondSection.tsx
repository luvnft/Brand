import { Link } from "react-router-dom";

//Import Needed Images
import secondImg from "/images/second.svg"


const SecondSection = () => {
    return (
        <main className="px-5 py-5 mt-10 text-xs md:py-10 lg:py-20 sm:px-10 md:px-15 xl:px-20 md:text-sm xl:text-base">
            <div className="w-24 py-2 my-10 font-medium text-center bg-accentColor rounded-3xl sm:w-28 md:w-32 lg:w-40 xl:w-44">
                <p>SERVICES</p>
            </div>
            <div className="flex flex-col-reverse gap-y-5 md:gap-y-0 md:flex-row md:justify-between">
                <div className="md:w-[48%] xl:w-[45%]">
                    <img
                        src={secondImg}
                        alt="Services Image"
                        className="w-[32rem]"
                    />
                </div>
                <div className="md:w-[48%] xl:w-[45%]">
                    <p className="text-xl font-medium md:text-2xl lg:text-3xl xl:text-4xl">Easy as 1,2,3</p>
                    <div className="flex flex-col mt-4 gap-y-10">
                        <div className="flex flex-col gap-y-2">
                            <p className="text-lg font-medium md:text-xl xl:text-2xl">Create a campaign</p>
                            <p>Craft impactful campaigns with ease. AFF empowers brands to create and manage marketing campaigns seamlessly. Input your details, fund via wallet, and let our smart contract technology handle the rest. Start today and elevate your brand.</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-lg font-medium md:text-xl xl:text-2xl">Join a campaign</p>
                            <p>Showcase your creativity in creator campaigns. Collaborate with top brands, submit your video entries, and gain recognition. Join AFF and make your mark with fair, transparent reward distribution.</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-lg font-medium md:text-xl xl:text-2xl">Manage your campaign</p>
                            <p>Effortlessly manage your campaigns. Monitor performance, track engagement, and optimize your strategy with our intuitive dashboard. With AFF, campaign management is simple and transparent.</p>
                        </div>
                    </div>
                    <div className="my-10">
                        <Link to="/create" className="px-5 py-3 text-white duration-300 bg-primaryBlue border-inherit rounded-3xl hover:bg-accentColor hover:text-black">Get Started</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SecondSection;