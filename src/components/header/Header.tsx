import Help from "./help";
import Navigation from "./navigation";
import { Search } from "./search";

export default function Header() {
  return (
    <>
      <header className="header-area">
        <Help />
        <Search />
        <Navigation />
      </header>
    </>
  );
}
