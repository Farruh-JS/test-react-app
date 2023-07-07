const arr = [34, 23, 5, 8, 68, 65, 9, 0, 34, 98]


function findMax(arr) {
	let max = arr[0];

	for (let num of arr) {
		num = arr[0]
		arr[0]++
		if (max < num) {
			max=num
		}
		console.log(max)
	}


}