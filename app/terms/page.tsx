import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">이용약관</h1>

        <div className="mb-6">
          <p className="mb-4 text-sm text-muted-foreground">
            최종 업데이트: 2025년 3월 15일
          </p>
          <p className="mb-4">
            아스키채팅 모음 커뮤니티(이하 &quot;서비스&quot;)를 이용해 주셔서
            감사합니다. 본 약관은 서비스 이용에 관한 조건 및 절차, 회원과 당사의
            권리, 의무 및 책임사항, 기타 필요한 사항을 규정합니다. 서비스를
            이용하시기 전에 본 약관을 주의 깊게 읽어주시기 바랍니다.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            1. 약관의 적용
          </h2>
          <p className="mb-4">
            본 약관은 당사가 제공하는 모든 서비스에 적용되며, 서비스 이용 시 본
            약관에 동의한 것으로 간주됩니다. 당사는 관련 법령에 위배되지 않는
            범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내
            공지사항을 통해 공지합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            2. 서비스 이용 계약의 성립
          </h2>
          <p className="mb-4">
            서비스 이용 계약은 회원이 본 약관에 동의하고 당사가 제공하는
            회원가입 양식에 따라 회원정보를 기입한 후 가입 신청을 하고, 당사가
            이를 승낙함으로써 성립됩니다.
          </p>
          <p className="mb-4">
            당사는 다음과 같은 경우에 회원가입을 거부하거나 제한할 수 있습니다:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
            <li>허위 정보를 기재하거나 필수 정보를 누락한 경우</li>
            <li>
              다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등
              전자상거래 질서를 위협하는 경우
            </li>
            <li>
              관련 법령에 위배되거나 미풍양속을 저해하는 목적으로 신청한 경우
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            3. 회원의 의무
          </h2>
          <p className="mb-4">회원은 다음 행위를 해서는 안 됩니다:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>타인의 정보 도용</li>
            <li>당사가 게시한 정보의 변경</li>
            <li>
              당사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는
              게시
            </li>
            <li>당사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
            <li>
              당사와 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
            </li>
            <li>
              외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는
              정보를 서비스에 공개 또는 게시하는 행위
            </li>
            <li>기타 불법적이거나 부당한 행위</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            4. 서비스의 제공 및 변경
          </h2>
          <p className="mb-4">당사는 다음과 같은 서비스를 제공합니다:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>아스키 아트 콘텐츠 제공 서비스</li>
            <li>아스키 아트 검색 및 공유 서비스</li>
            <li>커뮤니티 서비스</li>
            <li>
              기타 당사가 추가 개발하거나 제휴를 통해 회원에게 제공하는 서비스
            </li>
          </ul>
          <p className="mb-4 mt-4">
            당사는 서비스의 품질 향상, 기술적 필요성, 운영상 필요에 따라
            서비스의 전부 또는 일부를 변경할 수 있습니다. 서비스의 내용,
            이용방법, 이용시간에 대한 변경이 있는 경우 변경사유, 변경내용 등을
            변경 전에 서비스 내 공지사항을 통해 공지합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            5. 서비스 이용 시간
          </h2>
          <p className="mb-4">
            서비스는 원칙적으로 24시간 연중무휴로 제공됩니다. 다만, 당사는
            서비스의 운영 및 유지보수를 위해 정기적 또는 비정기적으로 서비스를
            중단할 수 있으며, 이 경우 사전에 공지합니다. 단, 시스템 장애,
            천재지변 등 불가항력적인 사유로 인한 서비스 중단은 사전 공지 없이
            이루어질 수 있습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            6. 회원 탈퇴 및 자격 상실
          </h2>
          <p className="mb-4">
            회원은 언제든지 서비스 내 설정 메뉴를 통해 회원 탈퇴를 신청할 수
            있으며, 당사는 관련 법령이 정하는 바에 따라 이를 즉시 처리합니다.
          </p>
          <p className="mb-4">
            다음과 같은 경우 당사는 회원의 자격을 제한, 정지 또는 상실시킬 수
            있습니다:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>가입 신청 시 허위 내용을 등록한 경우</li>
            <li>
              다른 회원의 서비스 이용을 방해하거나 정보를 도용하는 등 전자상거래
              질서를 위협하는 경우
            </li>
            <li>
              서비스를 이용하여 법령 또는 본 약관이 금지하는 행위를 하는 경우
            </li>
            <li>
              기타 회원으로서의 자격을 지속시키는 것이 부적절하다고 판단되는
              경우
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            7. 저작권 및 콘텐츠 정책
          </h2>
          <p className="mb-4">
            서비스에 게시된 모든 콘텐츠의 저작권은 해당 콘텐츠의 제작자 또는
            당사에 귀속됩니다. 회원은 서비스를 이용하여 얻은 정보를 당사의 사전
            승낙 없이 복제, 송신, 출판, 배포, 방송 등 기타 방법에 의하여 영리
            목적으로 이용하거나 제3자에게 이용하게 해서는 안 됩니다.
          </p>
          <p className="mb-4">
            회원이 서비스에 게시한 콘텐츠의 저작권은 해당 회원에게 귀속됩니다.
            단, 당사는 서비스의 운영, 전시, 전송, 배포, 홍보 등의 목적으로
            회원의 콘텐츠를 사용할 수 있는 권리를 가지며, 이는 서비스 내에서
            무상으로 사용됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            8. 면책조항
          </h2>
          <p className="mb-4">
            당사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인
            사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.
          </p>
          <p className="mb-4">
            당사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대해 책임을 지지
            않습니다.
          </p>
          <p className="mb-4">
            당사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대해
            책임을 지지 않으며, 서비스를 통해 얻은 정보 및 자료의 신뢰도, 정확성
            등에 대해 책임을 지지 않습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            9. 약관의 변경
          </h2>
          <p className="mb-4">
            당사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내
            공지사항을 통해 공지합니다. 회원은 변경된 약관에 동의하지 않을 경우
            회원 탈퇴를 선택할 수 있으며, 변경된 약관의 효력 발생일 이후에도
            서비스를 계속 이용하는 경우 약관의 변경사항에 동의한 것으로
            간주됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            10. 분쟁해결
          </h2>
          <p className="mb-4">
            서비스 이용과 관련하여 당사와 회원 간에 발생한 분쟁은 원만한 합의에
            의해 해결함을 원칙으로 합니다. 합의가 이루어지지 않을 경우 관련 법령
            및 상관례에 따릅니다.
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
