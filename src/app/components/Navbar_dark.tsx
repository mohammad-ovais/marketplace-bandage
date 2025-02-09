import Image from "next/image";
import Vector from "/icons/Vector.png";
import icn_xs from "/icons/icn_xs.png";
import insta from "/icons/insta.png";
import you from "/icons/you.png";
import fcb from "/icons/fcb.png";
import twtr from "/icons/twtr.png";

export default function Navbar_dark() {
  return (
    <div className="hidden md:flex justify-between items-center px-5 h-16 p-2 text-white text-sm font-semibold bg-[#1B365D]">
      {/* Left Section: Phone */}
      <div className="flex items-center gap-2">
        <Image src={Vector} alt="Phone Icon" width={16} height={16} />
        <span>(225)555-0118</span>
      </div>

      {/* Center Section: Email */}
      <div className="hidden md:flex items-center gap-2 md:mr-8 lg:mr-40">
        <Image src={icn_xs} alt="Email Icon" width={16} height={12} />
        <span>michelle.rivera@example.com</span>
      </div>

      {/* Center Message */}
      <h6 className="hidden lg:flex items-center gap-3">
        Follow Us and get a chance to win 80% off
      </h6>

      {/* Right Section: Social Icons */}
      <div className="flex items-center gap-3">
        <span>Follow Us:</span>
        <Image src={insta} alt="Instagram" width={20} height={20} />
        <Image src={you} alt="YouTube" width={20} height={20} />
        <Image src={fcb} alt="Facebook" width={20} height={20} />
        <Image src={twtr} alt="Twitter" width={20} height={20} />
      </div>
    </div>
  );
}
