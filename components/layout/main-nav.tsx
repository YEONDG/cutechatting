import { ModeToggle } from "../mode-toggle"
import { AuthNav } from "./auth-nav"
import NavList from "./nav-list"

export const MainNav = () => {
  return (
    <div className="hidden items-center gap-2 text-xl sm:flex">
      <ModeToggle />
      <NavList />
      <AuthNav />
    </div>
  )
}
