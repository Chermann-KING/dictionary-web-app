import Logo from "@/images/logo.svg";
import FontSelector from "./FontSelector";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="h-9 flex justify-between items-center">
      {/* LEFT */}
      <Logo />
      {/* RIGHT */}
      <div className="h-full flex justify-end items-center gap-5">
        <FontSelector />
        <span className="h-full border-l border-light-2"></span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
