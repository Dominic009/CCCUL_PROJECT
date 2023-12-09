import "./App.css";
import hero from "./home_banner.89da2f166bc70828ce27.jpg";
import credit from "./credit.svg";
import SvgComponent from "./SvgComponent";
import founder from "./Founder.png";
import { useState } from "react";

function App() {

  const [isOpen , setIsOpen] = useState(false);

  return (
    <div className="App relative h-[100%]">
      <nav className="w-full h-12 bg-[#ebf1f3] flex justify-between align-middle sticky invisible lg:visible top-0 z-50">
        {/* left side  */}
        <div className="w-48 h-12 flex-1 items-center flex gap-4 text-[#474747] text-sm font-extrabold ml-10 font-Lato ">
          <span className="cursor-pointer hover:scale-110 hover:text-[#e74c3c]">
            Office Bearer's
          </span>
          <span className="cursor-pointer hover:scale-110 hover:text-[#e74c3c]">
            Board of Director's
          </span>
          <span className="cursor-pointer hover:scale-110 hover:text-[#e74c3c]">
            Credit Committee
          </span>
          <span className="cursor-pointer hover:scale-110 hover:text-[#e74c3c]">
            Supervision Committee
          </span>
        </div>

        {/* right side */}
        <div className=" w-[266px] h-12 mr-10 flex items-center justify-between gap-3">
          <span className="text-[#474747] text-sm font-extrabold font-Lato cursor-pointer hover:scale-110 hover:text-[#e74c3c]">
            President's Message
          </span>

          <div className=" w-24 h-12 flex-1 flex items-center gap-2 justify-center">
            <div className=" w-8 h-8 p-1 rounded-full bg-[#DBEAFE] shadow-md transition-all duration-200 hover:scale-125 hover:text-primary cursor-pointer">
              <i className="fa-brands fa-facebook-f fa-lg text-[#242269] hover:text-[#e74c3c] "></i>{" "}
            </div>
            <div className=" w-8 h-8 p-1 rounded-full bg-[#DBEAFE] flex justify-center items-center shadow-md transition-all duration-200 hover:scale-125 hover:text-primary cursor-pointer">
              <i class="fa-solid fa-phone-volume fa-lg text-[#242269] hover:text-[#e74c3c] "></i>{" "}
            </div>
            <div className=" w-8 h-8 p-1 rounded-full bg-[#DBEAFE] flex justify-center items-center shadow-md transition-all duration-200 hover:scale-125 hover:text-primary cursor-pointer">
              <i className="fa-solid fa-envelope-open-text fa-lg text-[#242269] hover:text-[#e74c3c] "></i>
            </div>
          </div>
        </div>
      </nav>

      <div className="absolute top-0 md:top-0 lg:top-12 w-full h-[383px] md:h-[335px] bg-no-repeat bg-cover bg-center bg-[url(https://www.cccul.com/static/media/home_banner.89da2f166bc70828ce27.jpg)]">
        <div className="w-full md:h-[335px] h-[383px] backdrop-brightness-50 backdrop-saturate-100 backdrop-blur-[2px] bg-[rgba(36,34,105,0.2)]"></div>

        {/* opacity has been set to 0 for mobile version */}

        <div className={`absolute right-0 opacity-0 md:opacity-0 bg-white lg:bg-transparent w-full h-screen z-30 pt-8 lg:w-[715px] lg:-top-[10px] ${isOpen ? "opacity-100" : "opacity-0"}`}>
          <ul
            className="menu flex p-2 text-black text-[14px] font-Lato font-extrabold flex-col gap-6 
           md:flex-col lg:flex-row md:gap-6 md:bg-transparent
         md:text-black lg:text-white"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Loans</a>
            </li>
            <li>
              <a href="#">Deposit</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Notice</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* menu icon  */}
        <div className="z-40 absolute right-7 top-[5px] p-4 lg:hidden" onClick={() => {
          if(isOpen){
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}>
          
            <i className=" fa-solid fa-bars fa-lg text-slate-400"></i>
       
        </div>

        <div className=" font-bold text-4xl mt-[-170px] text-gray-300 absolute text-center w-full font-lato pr-8 pl-8 bottom-24 ">
          The Christian Co-operative Credit Union Ltd., Dhaka
          <p className=" text-sm font-normal mt-4">
            Employment Creation is Our Goal; Self-Reliant Community is Our
            Dream.
          </p>
        </div>

        <span className=" absolute top-[19px] md:top-[26px] md:left-[140px] left-[88px] font-semibold text-[20px] md:text-[23px] text-white font-Lato">
          Dhaka Credit
        </span>
        <SvgComponent />
      </div>

      <h2 className=" mt-[370px] mb-20 font-extrabold font-Lato text-3xl text-[#474747] text-center">
        What we do..?
      </h2>


      {/* content */}
      <section class="px-4 md:px-11 absolute top-[540px] md:w-full">

        <div className=" relative grid gap-14 md:grid-cols-3 md:gap-11 font-lato">

          {/* section 1 */}
          <div className="py-[5px] px-6 flex justify-center bg-white rounded-xl">
            <div className="absolute w-[80px] h-[80px] lg:w-[80px] md:w-[70px] lg:h-[80px] md:h-[70px] rounded-full -top-[48px] bg-[#242269] flex justify-center items-center">
              <i class="fa-solid fa-piggy-bank text-4xl text-onPrimary text-white"></i>
            </div>

            <div class=" text-left flex flex-col justify-center ">
              <h1 className=" font-bold text-lg mt-2 text-[#474747] md:text-[2.5vh] lg:text-[2.8vh]">
                Deposit Accounts
              </h1>
              <p className="text-md md:text-[2.1vh] lg:text-[2.5vh] mt-2 mb-2 text- font-normal text-[#474747] ">
                Dhaka credits various deposit products are specially designed
                for the betterment of the members. These deposits are designed
                for meeting the current and future requirements that may arise
                due to any situation.
              </p>

              <span class="text-[#474747] opacity-70 font-semibold text-md md:text-[2.5vh]  ">
                View All
              </span>
            </div>
          </div>

          {/* section 2 */}
          <div className="py-6 px-6 flex justify-center bg-white rounded-xl relative">

            <div className="absolute -top-[48px] w-[80px] h-[80px] lg:w-[80px] md:w-[70px] lg:h-[80px] md:h-[70px] rounded-full bg-[#242269] flex justify-center items-center">
              <i class="fa-solid fa-sack-dollar text-4xl text-onPrimary text-white"></i>
            </div>

            <div class=" text-left flex flex-col justify-center ">
              <h1 className=" font-bold text-lg mt-2 text-[#474747] md:text-[2.5vh] lg:text-[2.8vh]">
                Loan Products
              </h1>
              <p className="text-md md:text-[2.1vh] lg:text-[2.5vh] mt-2 mb-2 text- font-normal text-[#474747] ">
                Dhaka credits has introduced various loan products for its
                members with the lowest interest rates. These loans are designed
                in such way that members can take loan easily according to their
                need.
              </p>

              <span class="text-[#474747] opacity-70 font-semibold text-md md:text-base">
                View All
              </span>
            </div>
          </div>

          {/* section 3 */}
          <div className="py-6 px-6 flex justify-center bg-white rounded-xl relative">
            <div className="absolute -top-[48px] w-[80px] h-[80px] lg:w-[80px] md:w-[70px] lg:h-[80px] md:h-[70px] rounded-full bg-[#242269] flex justify-center items-center">
              <i class="fa-solid fa-truck-medical text-4xl text-onPrimary text-white"></i>
            </div>

            <div class=" text-left flex flex-col justify-center ">
              <h1 className=" font-bold text-lg text-[#474747] md:text-[2.5vh] lg:text-[2.8vh] -mt-4">
                Our Services
              </h1>
              <p className="text-md md:text-[2.1vh] lg:text-[2.5vh] mt-2 mb-2 text- font-normal text-[#474747] ">
                Dhaka credits has become much more than just a financial
                organozation, it has begun providing services for the different
                sectors to the members.
              </p>

              <span class="text-[#474747] opacity-70 font-semibold text-md md:text-base">
                View All
              </span>
            </div>
          </div>
        </div>

        {/* Founder column */}
        <div className="w-full flex flex-col flex-col-reverse md:flex-row mt-4 md:items-center relative">


          {/* fourth section */}
          <div className=" py-8 md:py-[24px] px-6 flex md:items-center bg-white rounded-sm ">

            <div class=" text-left flex flex-col justify-center md:w-[500px]">

              <h1 className="font-bold mt-2 text-[4vh] text-[#474747] md:text-[4vh] lg:text-[5vh] md:py-2">Fr. Charles J. Young</h1>

              <h1 className=" font-bold text-lg mt-2 mb-2 text-[#474747] md:text-[2.5vh] lg:text-[2.8vh] md:py-2">
                Founder of Dhaka Credit
              </h1>
              <p className="text-md md:text-[2.1vh] lg:text-[2.8vh] font-normal text-[#474747] ">
                The pioneer of the credit union movement in Bangladesh,
                Fr.Charles J. Young CSC was born in May 3rd 1904, in New York,
                USA. His full name is Fr. Charles Joseph Young CSC. He was the
                founder of "The Christian Co-Operative Credit Union Ltd. Dhaka,"
                the largest credit union in Bangladesh and south Asia. Fr.
                Charles joined the seminary of the holy cross on September on
                1923, and joined in the first verse in 1925 & accepted his
                blessing in 1928.In 1929
              </p>

              <span class="text-[#474747] opacity-70 font-semibold text-md  mt-2 md:text-base md:py-2">
                Read more
              </span>
            </div>
          </div>

          <div className=" md:w-[400px] h-[300px] md:h-[550px] mt-4 mb-4 shrink-0  bg-no-repeat bg-contain bg-center bg-[url(https://www.cccul.com/static/media/index_founder%20copy.bd5ebf79f4a400f7f529.png)] "></div>
        </div>
      </section>





      <footer className="">
        {/* <div className="bg-white w-full h-[320px] mt-[950px] py-[40px] px-[12px] block">
          



        </div> */}
      </footer>
    </div>
  );
}

export default App;
