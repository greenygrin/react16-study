# 공적 마스크 판매 지도 만들기 (feat. 카카오맵)


## Kakao Developers

### JavaScript 키

91a495630f0a090b86c001b13344c127

### 플랫폼 추가

웹 - http://localhost:3000


---------------------------------


## 공공데이터 포털 - 공적 마스크 판매 정보

https://www.data.go.kr/dataset/15043025/openapi.do


### 참고문서

https://app.swaggerhub.com/apis-docs/Promptech/public-mask-info/20200307-oas3#/


### Open API - Request URL

https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?appkey=91a495630f0a090b86c001b13344c127&lat=위도&lng=경도&m=반경미터


---------------------------------

## 위치 정보 추적

```shell
yarn add react-geolocated
```

---------------------------------
<br />

## 컴포넌트화

대규모 프로젝트가 아닐 경우, 또는 혼자 작업하는 경우 굳이 하지 않아도 됨

- 데이터 연동 처리 => props
- 이벤트 처리 => props
- 화면 출력 => component