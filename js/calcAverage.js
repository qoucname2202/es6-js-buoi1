// Exercise 2:
const calcAverageScore = (...score) => {
	const sum = score.flat(Infinity).reduce((total, item) => {
		return (total += item);
	}, 0);
	return sum / score.flat(Infinity).length;
};
const viewCalc = (idBtn, idForm, mess) => {
	document.getElementById(idBtn).addEventListener('click', e => {
		e.preventDefault();
		const inputList = document.querySelectorAll(`${idForm} input`);
		let scoreList = [];
		inputList.forEach(item => {
			let { value } = item;
			scoreList.push(Number.parseFloat(value));
		});
		const total = calcAverageScore(scoreList).toFixed(2);
		document.getElementById(mess).innerHTML = total;
	});
};
// Calcaulator score block 2
viewCalc('btnKhoi1', '#frmKhoi1', 'tbKhoi1');

// Calcaulator score block 2
viewCalc('btnKhoi2', '#frmKhoi2', 'tbKhoi2');
