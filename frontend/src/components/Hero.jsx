import styles from "../style";
import {  science } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} mb-40 flex-col xl:px-0 sm:px-16 px-6`}>
       
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Decentralizing <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Science,</span>{" "}
          </h1>
    <div className="ss:flex hidden md:mr-4 mr-0 mt-20">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
      Empowering Researchers         </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Empowering researchers and enthusiasts alike to collaborate, share, and flourish in a transparent, decentralized ecosystem where every discovery matters.
        </p>
      </div>

  <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
  <img src={science} alt="billing" className="w-[100%] h-[100%] relative z-[5] transform -translate-y-20" />  {/* Adjust the value as needed */}

  {/* gradient start */}
  <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
  <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
  <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
  {/* gradient end */}
</div>


      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
