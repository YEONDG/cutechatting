import { Separator } from "@/components/ui/separator"

import { SidebarNav } from "../_components/sidebar-nav"

const sidebarNavItems = [
  {
    title: "나의 좋아요 목록",
    href: "/dashboard",
  },
  {
    title: "프로필 수정",
    href: "/dashboard/profile",
  },
  {
    title: "회원 탈퇴",
    href: "/dashboard/delete-account",
  },
]
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative w-full px-10">
      <h2 className="text-3xl font-bold tracking-tight">대시보드</h2>
      <Separator className="my-4" />
      <div className="flex max-w-7xl flex-col lg:flex-row lg:space-x-12 lg:space-y-0">
        <div>
          <SidebarNav items={sidebarNavItems} />
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </section>
  )
}
