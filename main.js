/*
  promise 객체
  객체에 담겨있는 데이터의 상태값을 가지고있는
  pending : 대기
  fullfiled : 성공적으로 작업의 수행이 완료된 상태
  rejected : 작업의 요청이 거절된 상태

  작업시간이 오래걸리는 업무를 수행할 때 promise로 반환하면
  해당 작업 완료 이후 동기적으로 다음 작업을 선형화해서 수행 (es6)
*/
fetch('DB/department.json')
	// fetch가 반환한 promise를 동기적으로 호출
	.then((data) => {
		// 이전 메서드에서 반환된 promise가 fullfiled상태일때 실행
		console.log(data); // json형태로 pasrsing되지 않은 raw data
		const result = console.log(data); // json형태로 변환시 promise로 반환
		result.then((json) => {
			console.log(json); // json로 반환된 데이터를 then으로 확인
		});
	})
	.catch((err) => {
		// 이전 메서드에서 반환된 promise가 rejected 상태일때 실행
		// 오류가 발생했을 때 runtime에러가 발생하지 않도록 예외사항을 준비
		console.log(err);
	});
