# 🔖 목차

> ## ✯ 프로젝트 소개
> ## ✣ 팀원 소개
> ## ⚒️ 개발 도구
> ## 🗓️ 프로젝트 일정
> ## 📄 API 명세서&ERD 설계도
> ## ❖ 메뉴 구조도
> ## ⚙️ 화면 구현 및 주요 기능 코드 설명
> ## ✪ 느낀점

## ✯ 프로젝트 소개[Notion]
▷ 제목: 
- 매장용 키오스크 "구멍가게" 개발


▷ 목적:
- 학습 내용의 복습 및 활용, 팀원들 간 협업과 과정 이해

▷ 분류
- 팀 프로젝트

▷ 제작 기간
- 2024.04.01 ~ 2024.05.17

▷ 주요 기능:
- 관리자 회원가입 및 로그인
- 관리자 모드 메뉴
    > 전체 매출 및 제품별 매출 조회

    > 결제 내역 조회

    > 메뉴 추가/관리

    > 회원 피드백 조회
    
    > 회원 조회

    > 점포 관리: 로고/상호명 변경


- 사용자 모드 메뉴
    > 포장/매장 여부 선택

    > 전체 및 카테고리별 메뉴 선택

    > 결제 방법(카드결제, 카카오페이)

    > 포인트 적립/사용

    > 주변 관광지 추천 받기

## ✣ 팀원 소개

 > 팀장: 이동윤

 ### Back-End
 - 


 ### Front-End
 - 

 ### etc.
 - 프로젝트 최종 발표

 > 팀원: 이지언

 ### Back-End
 - 

 ### Front-End
 -


 > 팀원: 서현욱

 ### Back-End
 - 

 ### Front-End
 - 


 > 팀원: 김종현

 ### Back-End
 - 

 ### Front-End
 - 

 > 공동 작업
 - API 명세서 작성
 - DB 설계

## ⚒️ 개발 도구

### Back-End & DataBase
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon Aws-232F3E?style=for-the-badge&logo=Amazon Aws&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"/>


### Front-End
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=black"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTMl5&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>


### SCM 형상 관리
<img src="https://img.shields.io/badge/Git-181717?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>


### Library
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white"/>
<img src="https://img.shields.io/badge/MyBatis-271e1f?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVR4nO3US4hPcRQH8H9RI+Wx8FohkVfkUdQkC5FXxs6WhZSysSBCTWyRZpryWDHZi7LxSGRBKUtKMmGiRB6ZIvPRqbP4u917/zP/maXv6t77u+f7Ped8z/k1GiMANuI29mJuY7yBM/7F2bGQLcR2TMR8rMVsHMJd/MSftirBKgwrx03Mwv1839BuBdHnAfzCezzH1yR9gjv53IdH+IR3uIWudkXn4G0Sf8GQapxuV2QLvmENJqRXXTiGG0k+lAmsrCLpRTc2Y2rJ+YqKuGhVYFmrLPubSh1ODx7jepSOzoq4+E8mNg+TyxKMH1fnCNahP1pUiNuKF2n2ASzBDxwuE7moNQ5iJqZVVLQYr7G+7HA6XrYQuIxd+I2HOIUdafyUaA/WFSttFlmEjzUCx7G/5rynzuiOVI9snpYED2R77tUI7C4jjrKOYjAn6Fx+25bP13ACM3L2qxDxHc3Em3A1l6iID7iAPblo0ZYH6nGkmPl544dncQuXtWcfvo+RfBALWl1ol3L0RotXWF5JXhBamstW5kkRkcyV2J0RkReEJmFnehTGvsHnvLZjuU7GKI+a+D8aBfwFL0hrRFV1ciwAAAAASUVORK5CYII=&logoColor=white">
<img src="https://img.shields.io/badge/Lombok-ca0124?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nO2aW4hVVRjHP01HzZJGJcpuU6l00Uqzgl4sCrqgDz5IZZjZQxlEaKBJWVA9pEEG3QkqESrtAqWhY+WDQZBpF2ys1DLz0s3spqU2Nr/42GvR19eZaVpzBtaZs39wmLPP3vs/a+219ndbS6SkpKSkpKSk1gEOA14H/gBukXoDmMHfvCf1BHAU8L15AHOlngAeNJ3/Augv9QIwAjhoHsAkqSeAl03nV0tPAjgDuBt4E9gItAAXm/NnAW2h8/r3HOkJAKcElxY7Z1lmrnvE/L5cegLAJGAflTkE3GCu3WnOfQyMlFoGmBw6GWkFloTfTwcGmWsHVHhAvwDjpRYBTnMj/2lH7zQwtJ1Zshc4U2oNYIXr/OBOhL77jQHUjkc+AHpLrQCMcu/52Z2870Vz33bgN3N8tdQKwP2m4Uv/x30nAdvCfa8C9xidt6RWoAhfIxPduaOBdcAmf87kAZcBhwPHGNeps6FBcgcYZzr/M9DPnZ/mjNzzQFMHel+aa0+U3AEWmAYvrnB+mOtUdI865a8HRodZol5kivMkx0nOAL2Are1Nf3PdIOCpdiLD9mjNPisELu1o+le4/oIw8n924gF8KLkDrDQNfiMYLv3b9z/uawJuDpng2mBE1VD+aPRulBrw/W2hsTqi35nGj0rQ09kR+QkYKDkDLDINft98/wrok6C32GgslJyhmMK2imOt/KwEPfUCB8L9OqtGSM4AL5kOf+YM4ZEJevOMRrPkDDDeNLbNjf78BL2BwG6jMUFyhSKD+8g0dr35/quGsgmas41GS9ZZIIXrivwO7DHHdyToaVHkW6MxWXIFODWMcuRdl8oOSNCcaTQ+yXb0gb4hYLGuzkZz1yVo9gd2GY1rJFeA+1yMriMeWa05QRct/2a1L5Kx1T9kGvuOM3xNCZrDXAnsKskRYLhzUS0uo0uK14EXjMbbKTOo2wEGhypOZI8zgs2JU3+i0dCZNUZyA+gHrDEN3e8ehhrBoQm6jW4x5CHJDaCPFjZNI3XKL3P+f2xi8URrAZHPtQ4oOQE0AK/wT+4EnjPH0xK1b3NTP68VIAq/vNx1/olw7njgMWB6ovYVwX1G7pKcoEhIVrnOP1mNsrS+Ls7lNWcV8VGEuBtc51eFabqxK++prg26SpHqNUouUCxI2IRGmQ+8Zo7PTdQ+D/jB6HytK0GSAxQW+XYX4WmF56Zw/vyQ9i5KCVGBqcFbRL5JqRN256akNW7UdXQurIK2prePOu1tWZS4KPz7bDcyMbY/tgr6lwBbnLYWTE6oTg+6bujWuca1hve9oQrl8aUVVn2ezmJlh6Liandhxg0IY7ug2Vt3e4WFDb/Ko//rWskFim1qNqafm1i31/f7IuABYAf/Rh/EM8AQyQngWdPIe0NCYj9HmDC4MdT8dUPTlcCtwMMhZY11+0odX5KNlfcAc+ge1HMs1IclOQMMcSWsVNrCXj7d3Hh5tiWsSgAnh50ZO8MKrP3EjUkHwvHWELLq9tbHQxY3ISX/LykpKSkpKZHu5C8+ETRdu+5D6AAAAABJRU5ErkJggg==&logoColor=white">

<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
<img src="https://img.shields.io/badge/Emotion-cb0096?style=for-the-badge&logo=react&logoColor=white">