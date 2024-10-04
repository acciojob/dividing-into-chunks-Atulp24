const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
   const result = [];
	let currentSum = 0;
	let currentSubArray = [];

	for(let num of arr) {
		if(currentSum + num > n) {
			result.push(currentSubArray);
			currentSum = 0;
			currentSubArray = [];
		}
		currentSubArray.push(num);
		currentSum += num;
	}
	if(currentSubArray.length > 0) {
		result.push(currentSubArray);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
