import { FileText } from "lucide-react";
import NavLink from "./nav-link";

export default function Header() {
  const isLoggedIn = false;
  return (
    <nav className="container border flex justify-between items-center py-4 lg:px-18 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink
          href={"/"}
          className="flex items-center gap-1 lg:gap-2 shrink-0"
        >
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-800 hover:rotate-12 transform transition-all duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Solace'ai
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center ">
        <NavLink href={"/#pricing"}>Pricing</NavLink>
        {isLoggedIn && <NavLink href={"/dashboard"}>Your Summaries</NavLink>}
      </div>
      <div className="flex lg:justify-end lg:flex-1">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <NavLink href={"/upload"}>Upload a PDF</NavLink>
            <div>Pro</div>
            <button>User</button>
          </div>
        ) : (
          <div>
            <NavLink href={"/sign-in"}>Sign In</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
