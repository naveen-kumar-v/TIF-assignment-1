import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] pt-[5.25rem] pb-[5.75rem] px-[6.5rem] flex justify-between items-start">
      <img
        src={logo}
        alt="logo"
        className="w-[10.065rem] h-[7.8125rem] shrink-0 self-center"
      />
      <div className="max-w-[15rem] text-[#646874] fontSource flex flex-col">
        <h1 className="text-[#0e2368] text-[1.17769rem] fontSource font-semibold leading-[1.70rem] mb-[0.88rem]">
          Contact Us
        </h1>
        <div className="flex flex-col gap-[0.88rem] leading-[1.4375rem]">
          <p>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>
      </div>
      <div className="max-w-[15rem] text-[#646874] fontSource flex flex-col  gap-[0.85rem]">
        <h1 className="text-[#0e2368] text-[1.17769rem] fontSource font-semibold leading-[1.70rem]">
          More
        </h1>
        <ul className="list-none flex flex-col pointer-events-none gap-[0.85rem] leading-[1.6875rem]">
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-between gap-14 items-end ">
        <div className="felx justify-start flex-col gap-2">
          <h1 className="text-[#0e2368] text-[1.17769rem] fontSource font-semibold leading-[1.70rem]">
            Social Links
          </h1>
          <div className="flex">
            <img src={insta} alt="insta" className="mr-[0.44rem]" />
            <img src={twitter} alt="twitter" />
            <img src={fb} alt="fb" className="ms-3" />
          </div>
        </div>

        <div>
          <p className="text-[#82889C] text-[0.916rem] font-roboto mt-3">
            © 2022 Food Truck Example
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
