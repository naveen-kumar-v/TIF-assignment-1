import AboutImg from "../assets/AboutImg.svg";

const About = () => {
  return (
    <div className="bg-red-300 mt-[11.5rem] gradient flex justify-evenly items-center ">
      <img src={AboutImg} alt="About image" className="h-[29rem] w-[24rem] " />
      <div className="flex flex-col gap-[1.3125rem] max-w-[28rem]">
        <h1 className="text-[#0e2368] font-semibold leading-6 font-poppins text-[2.8125rem] mb-2">
          About Us
        </h1>
        <p className="text-[#444957] font-sans text-[0.975rem] leading-[1.6875rem]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="bg-[#e23744] rounded-full w-fit flex justify-center items-center">
          <p className="px-[1.625rem] py-[0.1875rem] text-white leading-9 font-semibold fontSource">
            Read More
          </p>
        </button>
      </div>
    </div>
  );
};

export default About;
