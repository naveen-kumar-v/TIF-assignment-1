import pizza from "../assets/pizza.svg";
import overlay from "../assets/red-overlay.svg";
import Logo from "../assets/logo.svg";

const Homepage = () => {
  return (
    <>
      <div className="grid grid-cols-2 mb-4 h-screen">
        <div className="col-span-1 px-[6.25rem]">
          <img src={Logo} alt="logo" className="mt-8 mb-[6.94rem]" />
          <div className="fontSource text-6xl leading-[4.3125rem] text-[#0e2368] font-bold break-words w-[22.5625rem]">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </div>
          <div className="text-[#444957] w-[22.5625rem] mt-6 leading-[1.713rem] font-sans text-[1.02781rem]">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </div>
          <button className="px-[2.125rem] py-3.5 rounded-full bg-[#e23744] text-white font-bold leading-9 text-lg mt-14">
            Explore Now!
          </button>
        </div>
        <div className="col-span-1 relative">
          <img src={pizza} alt="pizza" className="absolute top-0 right-0" />
          <img
            src={overlay}
            alt="overlay"
            className="z-20 absolute top-0 right-0"
          />
          <button className="absolute top-8 right-10 z-20 px-5 py-[0.15rem] text-white border border-[#fff] rounded-full">
            <p className="fontSource font-semibold leading-9 text">
              Get in touch
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
