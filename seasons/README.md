//현재 위치 정보를 가져오기 위해 geoloction API 사용
window.navigator.geolocation.getCurrentPosition(
	position => console.log(position),
	err => console.log(err)
);

첫번째 인자는 위치정보를 가져오는데 성공했을 때 위치 반환
두번째 인자는 에러가 나면 에러를 반환