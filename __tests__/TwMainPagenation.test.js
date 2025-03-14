import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { TwMainPagenation } from "@/app/(platform)/twitch/_components/board-main-pagination"

// next/navigation 모킹
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  redirect: jest.fn(),
}))

// 사용자 상호작용 유틸리티 설정
const user = userEvent.setup()

describe("TwMainPagenation", () => {
  // 페이지가 올바르게 렌더링되는지 테스트
  it("renders correctly based on postsCount and current page", () => {
    require("next/navigation").useSearchParams.mockReturnValue(
      new URLSearchParams("page=3")
    )
    render(<TwMainPagenation postsCount={30} />)
    // 현재 페이지 (3)와 인접한 페이지 번호들 확인
    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument()
    expect(screen.getByText("4")).toBeInTheDocument()
    // 첫 페이지와 마지막 페이지 링크 확인
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  // // 이전 페이지로 정상적으로 네비게이트하는지 테스트
  // it("navigates to the previous page when previous button is clicked", async () => {
  //   require("next/navigation").useSearchParams.mockReturnValue(
  //     new URLSearchParams("page=2")
  //   )
  //   render(<TwMainPagenation postsCount={30} />)
  //   const mockRedirect = await require("next/navigation").redirect
  //   const prevPageButton = screen.getByRole("button", { name: /previous/i })
  //   await user.click(prevPageButton)

  //   expect(mockRedirect).toHaveBeenCalledWith("/twitch?page=1")
  // })

  // // 다음 페이지로 정상적으로 네비게이트하는지 테스트
  // it("navigates to the next page when next button is clicked", async () => {
  //   require("next/navigation").useSearchParams.mockReturnValue(
  //     new URLSearchParams("page=2")
  //   )
  //   render(<TwMainPagenation postsCount={30} />)

  //   const nextPageButton = screen.getByRole("button", { name: /next/i })
  //   await user.click(nextPageButton)

  //   expect(require("next/navigation").redirect).toHaveBeenCalledWith(
  //     "/twitch?page=3"
  //   )
  // })

  // // 첫 페이지와 마지막 페이지 버튼이 올바르게 동작하는지 테스트
  // it("navigates to the first and last page correctly", async () => {
  //   require("next/navigation").useSearchParams.mockReturnValue(
  //     new URLSearchParams("page=3")
  //   )
  //   render(<TwMainPagenation postsCount={30} />)

  //   const firstPageButton = screen.getByText("1")
  //   const lastPageButton = screen.getByText("5")

  //   await user.click(firstPageButton)
  //   expect(require("next/navigation").redirect).toHaveBeenCalledWith(
  //     "/twitch?page=1"
  //   )

  //   await user.click(lastPageButton)
  //   expect(require("next/navigation").redirect).toHaveBeenCalledWith(
  //     "/twitch?page=5"
  //   )
  // })

  // // 페이지 번호를 직접 클릭하여 네비게이션하는 경우를 테스트
  // it("navigates correctly when a specific page number is clicked", async () => {
  //   require("next/navigation").useSearchParams.mockReturnValue(
  //     new URLSearchParams("page=2")
  //   )
  //   render(<TwMainPagenation postsCount={30} />)

  //   const specificPageNumber = screen.getByText("4")
  //   await user.click(specificPageNumber)

  //   expect(require("next/navigation").redirect).toHaveBeenCalledWith(
  //     "/twitch?page=4"
  //   )
  // })

  // // 총 페이지 수보다 높은 페이지 번호로 접근 시 리다이렉트하는지 테스트
  // it("redirects when the current page is greater than total pages", () => {
  //   require("next/navigation").useSearchParams.mockReturnValue(
  //     new URLSearchParams("page=10")
  //   )
  //   render(<TwMainPagenation postsCount={30} />) // 총 페이지 수는 5

  //   expect(require("next/navigation").redirect).toHaveBeenCalledWith(
  //     "/twitch?page=5"
  //   )
  // })
})
