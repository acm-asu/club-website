import { useState } from "react";
import OpenedMobileNav from "./Mobile/OpenedMobileNav";
import MobileNav from "./Mobile/MobileNav";

import DesktopNav from "./DesktopNav";
import Statistics from "../Stats/Statistics";
import SocialMediaLinks from "../SocialMediaLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="navigation" style={{ marginTop: 0 }}>
      {/* Primary Navigation - Hidden on mobile */}
        <SocialMediaLinks />
        <DesktopNav />

        {/*Mobile Navigation*/}
        <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
        {/*Mobile Navigation when opened*/}
        {isOpen && <OpenedMobileNav setIsOpen={setIsOpen} />}
    </nav>
  );
}

export default Navbar;

// TODO: Possibly add progress bar that expands/contracts on scroll as border bottom