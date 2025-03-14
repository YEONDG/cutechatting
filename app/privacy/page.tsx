import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">
          개인정보처리방침
        </h1>

        <div className="mb-6">
          <p className="mb-4 text-sm text-muted-foreground">
            최종 업데이트: 2025년 3월 15일
          </p>
          <p className="mb-4">
            아스키채팅 모음 커뮤니티(이하 &quot;당사&quot;)는 이용자의
            개인정보를 중요시하며, 「개인정보 보호법」을 준수하기 위해 노력하고
            있습니다. 당사는 개인정보처리방침을 통하여 당사가 이용자로부터
            수집하는 개인정보의 항목, 수집 및 이용목적, 보유 및 이용기간, 제3자
            제공에 관한 사항을 안내드립니다.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            1. 수집하는 개인정보 항목
          </h2>
          <p className="mb-4">
            당사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>필수항목: 이메일 주소, 닉네임</li>
            <li>소셜 로그인 시 수집 정보: 이름, 프로필 이미지</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            2. 개인정보의 수집 및 이용목적
          </h2>
          <p className="mb-4">
            수집한 개인정보는 다음의 목적을 위해 활용됩니다:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별,
              불량회원의 부정이용 방지
            </li>
            <li>서비스 제공: 콘텐츠 제공, 특정 맞춤 서비스 제공</li>
            <li>
              마케팅 및 광고에 활용: 이벤트 등 광고성 정보 전달, 접속 빈도 파악,
              서비스 이용에 대한 통계
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            3. 개인정보의 보유 및 이용기간
          </h2>
          <p className="mb-4">
            원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
            지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가
            있는 경우 당사는 아래와 같이 관계법령에서 정한 일정한 기간 동안
            회원정보를 보관합니다.
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의
              소비자보호에 관한 법률)
            </li>
            <li>
              대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의
              소비자보호에 관한 법률)
            </li>
            <li>
              소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의
              소비자보호에 관한 법률)
            </li>
            <li>로그인 기록: 3개월 (통신비밀보호법)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            4. 개인정보의 파기절차 및 방법
          </h2>
          <p className="mb-4">
            당사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
            정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>파기절차</strong>: 이용자가 회원가입 등을 위해 입력한
              정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련
              법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.
            </li>
            <li>
              <strong>파기방법</strong>: 전자적 파일 형태로 저장된 개인정보는
              기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            5. 개인정보 보호책임자
          </h2>
          <p className="mb-4">
            당사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
            처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이
            개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="rounded-md bg-muted p-4">
            <p>
              <strong>개인정보 보호책임자</strong>
            </p>
            <p>이름: 연동근</p>
            <p>연락처: zzmn410@gmail.com</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            6. 개인정보 처리방침 변경
          </h2>
          <p className="mb-4">
            이 개인정보 처리방침은 2025년 3월 15일부터 적용됩니다. 법령 및
            방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의
            시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
        </section>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/">홈으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
