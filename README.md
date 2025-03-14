# 아스키채팅 (AsciiChat)

[![Next.js](https://img.shields.io/badge/Next.js-13.0-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📌 소개

재미있는 아스키 아트 채팅을 한 곳에서 모아보고 공유할 수 있는 커뮤니티 사이트입니다.

## 🚀 배포 링크

[아스키채팅 바로가기](https://ganda-yeondg.vercel.app/)

## 🛠 기술 스택

### Frontend

- **Framework:** Next.js 13
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn-ui
- **Form Handling:** React-hook-form
- **Validation:** Zod
- **Authentication:** Next-auth

### Backend

- **ORM:** Prisma
- **Database:** Supabase
- **Deployment:** Vercel

## ⚙️ 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/yourusername/ganda.git

# 디렉토리 이동
cd ganda

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 🔑 환경 변수 설정

프로젝트 실행을 위해 다음 환경 변수가 필요합니다:

```
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
...
```

## 주요기능 및 페이지 소개

| 메인화면                                                                                                                      | 로그인구현                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <img src ='https://github.com/YEONDG/ganda/assets/100520319/4d3d21cd-decd-40ef-957a-982d09b0039d' width='400' height='300' /> | <img src ='https://github.com/YEONDG/ganda/assets/100520319/e82d1638-e293-4519-9f97-c190c48cb9d8' width='400' height='300' /> |
|                                                                                                                               | 카카오, 구글, 네이버 로그인 구현                                                                                              |

| 트위치 메인                                                                                                                       | 글작성                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <img src ='https://github.com/YEONDG/ganda/assets/100520319/25d135c0-48ee-4f96-9d1d-3a08759d73e5.gif' width='400' height='300' /> | <img src ='https://github.com/YEONDG/ganda/assets/100520319/07b1522c-7511-4f33-bc74-a32c0521c88a.gif' width='400' height='300' /> |
| 트위치 메인페이지 페이지네이션                                                                                                    | 유효성 검사                                                                                                                       |

| 좋아요                                                                                                                            | 게시글 수정삭제                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <img src ='https://github.com/YEONDG/ganda/assets/100520319/362ee389-fd28-4f90-a840-0412e0952e49.gif' width='400' height='300' /> | <img src ='https://github.com/YEONDG/ganda/assets/100520319/2dc9d924-9b77-4d4e-b7fe-e7fc1af01d48.gif' width='400' height='300' /> |
| 게시글 좋아요                                                                                                                     | 운영자, 게시글 본인만 수정 삭제 가능                                                                                              |

## 🔍 주요 기능

- **소셜 로그인**

  - 카카오, 구글, 네이버 로그인 지원
  - JWT 기반 인증

- **게시글 관리**

  - 이모티콘 게시글 작성/수정/삭제
  - 실시간 유효성 검사
  - 좋아요 기능

- **페이지네이션**
  - 무한 스크롤 구현
  - 효율적인 데이터 로딩

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
