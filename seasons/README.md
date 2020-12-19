현재 위치 정보를 가져오기 위해 geoloction API 사용
window.navigator.geolocation.getCurrentPosition(
	position => console.log(position),
	err => console.log(err)
);

첫번째 인자는 위치정보를 가져오는데 성공했을 때 위치 반환
두번째 인자는 에러가 나면 에러를 반환

componentDidMount 메소드는 render되고 한번만 실행되기 때문에 state값을 load하고 싶으면 constructor에서 말고 여기서 하는게 좋다

constructor에선 state값을 init만 해주면 된다.

componentDidUpdate 메소드는 state값이 update될 때마다 실행되는 메소드 이기때문에 여러번 실행된다.