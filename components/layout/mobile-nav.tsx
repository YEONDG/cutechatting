"use client"

import { useState } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import { useSession } from "next-auth/react"

import { cn } from "@/lib/utils"

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { navLinks } from "./nav-list"
import { SignOutButton } from "./sign-out-button"

export const MobileNav = () => {
  const session = useSession()
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="flex p-2 hover:cursor-pointer sm:hidden">
          <Menu />
          <span className="sr-only">메뉴</span>
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="pl-0">
        <div className="mr-5 flex h-full flex-col items-end justify-center gap-10 text-3xl">
          {navLinks.map((link) => (
            <MobileLink key={link.href} href={link.href} onOpenChange={setOpen}>
              {link.name}
            </MobileLink>
          ))}
          {session?.status === "authenticated" ? (
            <SignOutButton />
          ) : (
            <MobileLink href="/sign-in" onOpenChange={setOpen}>
              로그인
            </MobileLink>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

const MobileLink = ({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) => {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
