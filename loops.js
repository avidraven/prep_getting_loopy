// Do your work here
var presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe'];

// for (i = 0; i < presidents.length; i++){
// 	console.log('The value of i is ' + i);
// 	console.log('The value at Index is ' + presidents[i]);
// }

function printContent(array){
	for (i = 0; i < array.length; i++){
		console.log('The value of i is ' + i);
		console.log('The value at Index is ' + presidents[i]);
	}
}
printContent(presidents);


var stringOfNumbers = '';

for (i = 10; i <= 20; i++){
	stringOfNumbers += i;
}
console.log(stringOfNumbers);