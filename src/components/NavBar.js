import Link from "next/link";

function NavBar() {
  return (
    <header className="w-full max-w-7xl px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex flex-col">
        <Link href="/">Home</Link>
        <Link href="/#overMij">Over mij</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#projecten">Projecten</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}

export default NavBar;
