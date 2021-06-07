## facebook-moneeapp Project

### 기간 : 2021/6/3 ~ 2021/6/7
### 참여자 : 김연주 

### 프로젝트 실행 방법 

1. 터미널에서 
   `git clone https://github.com/ddangju/facebook-moneeapp.git`

2. `npm install` 

3. `npm star


*브라우저에서 localhost:3000으로 접속*


#### > 로그인 가능한 아이디와 패스워드
- ID : abcde
- pw : 123456

<br>

###  프로젝트 목표

- 오류 없이 동작 하는가? 

- 각 UI 컴포넌트 재사용을 하였는가?

- 효과적인 데이터 상태관리를 하였는가?


### 적용기술

- Html/css, React.js, React-router-dom, FontAwesome Library



### 프로젝트 진행과정 

- canva를 이용하여 UI/UX 설계

<img src ="https://user-images.githubusercontent.com/68775082/120985820-f0a12500-c7b6-11eb-802e-335bbf192570.PNG" width=900px>

<br>
<br>

- Trello를 사용하여 해야할 작업을 세분화 하여 프로젝트 진행 

<img src ="https://user-images.githubusercontent.com/68775082/120985825-f26ae880-c7b6-11eb-93a8-17f5551dcec2.PNG" width=900px>

<br>
<br>

### 프로젝트 상세 설명

### - Login

- state로 ID와 PW의 값을 정해주고 정해진 값을 입력해야 로그인이 가능합니다.

   불일치시 그인 불가하다는 alert창이 뜹니다.

- ID와 PW가 일정 길이가 되면 로그인 버튼 색상이 바뀌게 구현했습니다.

###  -Feed

- 피드와 댓글창을 component로 분리하고 map 함수를 활용하여 재사용 하였습니다.

- 피드 작성을 하면 아래에서부터 작성되며 댓글은 위에서부터 작성됩니다.

- 작성한 댓글의 개수를 댓글창 위에서 확인할 수 있습니다.

- 반복되는 color값을 따로 variable파일에 분리하여 유지보수가 용이하게 작성하였습니다.

- fontawesome Library를 사용하여 icon를 UI에 활용하였습니다.



<br>
<br>

### 이슈상황

Feed를 작성후 타임라인에 업데이트 하는 기능을 구현하는 과정에서 `push`를 사용하니 오류 상황이 발생하였다.

- 원인 

`push` 메소드는 스트링을 배열에 추가를 해주고 **배열의 length** 을 반환해주므로 타임라인 입력 칸에 재입력을 하면 메소드에러가 발생.

- 해결 방법

`concat` 메소드를 사용하여 배열과 배열이 `병합` 되어 타임라인에 입력이 되면 계속해서 **추가**가 가능하게 구현. 
