import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";

type setIsOpenTypes = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNav({ setIsOpen, isOpen }: setIsOpenTypes) {
  return (
    <nav className="w-full sm:hidden flex justify-between py-2 px-5 z-99999">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <LiaTimesSolid className="text-4xl" />
        ) : (
          <GiHamburgerMenu className="text-4xl" />
        )}
      </button>
      <h1 className="text-purple-dark text-[21px] text-asu-red font-extrabold">
        <img src="/logo/Compact_Light_Mode.svg" className="w-14" />
      </h1>
    </nav>
  );
}

// TODO: Implement navbar animation on scroll to shrink/expand logo and navbar height