# Restful API

URL은 단 하나

http://helloworld.com/product
<br />

form method="get/post/put/delete"

put, delete 방식을 사용하기 위해서는 별도 설정 필요 (axios는 기본 지원)
<br />

1) GET : http://helloworld.com/product/12345
   -> 상품 상세 조회 ==> SELECT

2) GET : http://helloworld.com/product/?keyword=OOO&page=1
   -> 상품 목록 조회 ==> SELECT

1/2 -> 조회 (READ) --------- R

3) POST : http://helloworld.com/product
   -> 상품 데이터 저장 ==> INSERT

3 -> 생성 (CREATE) --------- C

4) PUT : http://helloworld.com/product
   -> 상품 데이터 변경 ==> UPDATE --------- U

5) DELETE : http://helloworld.com/product
   -> 상품 데이터 삭제  ==> DELETE --------- D
<br />

--> 앞글자만 따서 - CRUD 처리

하나의 url이 CRUD를 구현할 수 있도록 요청사항을 HTTP Method로 구분한 형태 -> Restful API

<br />
------------------------------------


# 샘플 API url

- GET - 목록 조회

http://itpaper.co.kr/demo/react/api/dept_list.php

- GET - 상세 조회

http://itpaper.co.kr/demo/react/api/dept_view.php?deptno=202

- POST - 데이터 저장

http://itpaper.co.kr/demo/react/api/dept_write.php

-> dname(학과이름), loc(학과위치)

- PUT - 데이터 수정

http://itpaper.co.kr/demo/react/api/dept_edit.php

-> deptno(학과번호), dname(학과이름), loc(학과위치)

- DELETE - 데이터 삭제

http://itpaper.co.kr/demo/react/api/dept_delete.php

-> deptno(학과번호)