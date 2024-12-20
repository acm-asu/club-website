import HorizontalLine from "../ui/HorizontalLine";
import { LeftFooterGrid } from "./LeftFooterGrid";
import RightFooterGrid from "./RightFooterGrid";
import { MiddleFooterGrid } from "./MiddleFooterGrid";
import { AllRightsReserved } from "./CopyrightsNotice";

export default function Footer() {
  return (
    <footer>
      <HorizontalLine />
      <main className="footer-container">
        <LeftFooterGrid />
        <MiddleFooterGrid />
        <RightFooterGrid />
      </main>
      <AllRightsReserved />
    </footer>
  );
}

// TODO: Possibly remove redunant menu in footer (already present in navbar), mimimizing to copyright
// TODO: Possibly move statistics inside footer atop copyright