# [LeeYuHan's PortFolio](https://next-portfolio-l0u0h0.vercel.app)

## Web Portfolio

### [프로젝트 소개]

- 개인 포트폴리오 웹사이트,
- 간단한 소개를 보여주는 메인 페이지와 프로젝트 목록을 보여주는 프로젝트 페이지, 이력을 보여주는 프로필 페이지로 구성
- 전체 페이지 및 요소들 반응형 적용 및 다크 모드 지원 구현,
- 프로필에서는 깃허브 캘린더와 연동하여 커밋 수 달력 출력
- 프로젝트에서는 노션 데이터베이스와 연동하여 노션에 정리한 프로젝트 목록들 출력

### [실행 화면]

- [**메인 페이지**](https://next-portfolio-l0u0h0.vercel.app/)

  - 간단한 소개글과 개발자스러운 애니메이션 이미지 출력
    ![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/3d9efa86-21c3-47ba-a95c-5df7cd31bc7a)
  - 다크모드 시
    ![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/1c02c007-c5bf-4561-a2b8-042f2ae5be38)

- [**프로젝트 페이지**](https://next-portfolio-l0u0h0.vercel.app/projects)

  - 노션 데이터베이스 API를 이용해 가져온 정리된 프로젝트들을 출력, 정해진 속성들에서 데이터를 추출해 알맞게 UI 구성해서 출력.
  - 클릭 시 해당 프로젝트의 정리된 노션 페이지로 이동하게 됨.
    ![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/571efbeb-65cf-46a9-8822-cbc8697988b9)
  - 다크모드 시
    ![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/8bd8cdea-f991-4c5a-8a04-32d4b06a7c09)

- [**프로필 페이지**](https://next-portfolio-l0u0h0.vercel.app/profile)

  - 개인 프로필에 대한 정리 페이지, 연락처 및 학력, 이력, 간단한 소개, 기술 스택 등 여러 이력들을 출력.
  - 깃허브 캘린더를 연동해 깃허브 잔디 달력을 가져와 커스텀하여 출력.
    ![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/4ac86554-bf46-40f0-bd83-a8f49f5a0494)
  - 다크모드 시
    ![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/c296f62d-7600-444c-b5cc-927aa6a12867)

- **헤더 및 푸터**
  - 헤더에는 좌측 로고와 우측 프로젝트 페이지와 프로필 페이지로의 네비게이션 버튼, 다크 모드 토글 버튼 출력
  - 푸터에는 좌측 로고와 노션 포트폴리오로의 링크 문구 및 author 표기, 우측엔 제작자의 깃헙, 벨로그, 인스타의 링크

**헤더**
![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/22370eb5-7ea0-4afd-9002-59f5682be45c)
![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/e5ea076a-d060-42bc-bcfe-592f549c8492)
**푸터**
![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/c5ebc283-8f58-48c1-8c1e-051103095b80)
![image](https://github.com/l0u0h0/next_portfolio/assets/72871841/c97a6e7a-68ce-452f-ab96-d5c7612a4346)

### [사용 언어 및 개발 환경]

- **FE**
  - Next.JS(v.12) => 추후 14버전으로 업그레이드 예정
  - Typescript
  - TailwindCSS
  - 상태관리 라이브러리 도입 예정 + React-Query를 통해 캐싱 도입 예정
- **vercel** 에 정적 배포 중
