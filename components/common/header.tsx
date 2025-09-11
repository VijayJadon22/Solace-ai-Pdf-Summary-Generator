import Link from "next/link";

export default function Header() {
  return (
    <nav className="container bg-red-500 flex justify-between items-center">
      <div>
        <Link href={"/"}>Solace ai</Link>
      </div>
      <div>
        <Link href={"/#pricing"}>Pricing</Link>
      </div>
      <div>
        <Link href={"/sign-in"}>Sign In</Link>
      </div>
    </nav>
  );
}
