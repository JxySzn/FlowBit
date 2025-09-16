import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";
import pulseLogo from "@/assets/logo-pulse.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image src={quantumLogo} alt="quantum Logo" className="" />
            <Image src={echoLogo} alt="echo Logo" className="" />
            <Image src={celestialLogo} alt="celestial Logo" className="" />
            <Image src={apexLogo} alt="apex Logo" className="" />
            <Image src={pulseLogo} alt="pulse Logo" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
