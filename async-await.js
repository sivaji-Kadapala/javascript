function step1(value, error) {
	return new Promise((resolve, reject) => {
		if (!error) {
			resolve(value + 10);
		} else {
			reject('Something wrong');
		}
	});
}
async function result() {
	let result1 = await step1(10, true);
	console.log(result1);
	return result1;
}
async function result2() {
	let result = await Promise.resolve(5);
	return result;
}
// console.log(result());
result().then((result) => console.log(result)).catch((error) => console.log(error));
