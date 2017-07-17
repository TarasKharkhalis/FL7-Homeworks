/* Exercise 1 */

var votes = ["angular","angular","react","react","react","angular","ember","react","vanilla"];
var users;

function vote(arr) {
	var obj = new Object();
	for (var i = 0; i < arr.length; i++){
		if (!obj.hasOwnProperty(arr[i])) {
			obj[arr[i]] = 1;
		} else {
			obj[arr[i]]++;
		}
	}
	return obj;
}

var res = vote(votes);
console.log(res);

/* Exercize 2 */

function getDataFromTextArea() {
	users = JSON.parse(document.getElementById('myTextAres').value);
	
	/* Task 1 (How many Female and Male) */

	var genders = {male: 0,female: 0};

	for (var i = 0; i < users.length; i++) {
			if(users[i].gender === "Male"){
				genders["male"]++;
			} else {
				genders["female"]++;
			}
	}
	var result = console.log("There are " + genders["male"] + " Males and " + genders["female"] + " Females");
	return result;

	///////////////////////////////////////////////////////

	/* Task 3 How many each of color */

	var colors = new Object();

	for (var i = 0; i < users.length; i++) {
		var fav_color = users[i].favorite_color;
		if (!colors.hasOwnProperty(fav_color)) {
			colors[fav_color] = 1;
		} else {
			colors[fav_color]++;
		}
	}
	var result = console.log(colors);
	return result;

	/* Task 2 (How many favorite unique colors) */

	var count = 0;

	for (var prop in colors){
		if (colors[prop] === 1) {
			count++;
		} else {
			continue;
		}
	}

	var uniqueColors = console.log("There are " + count + " favourite unique colors!");
	return uniqueColors;

	//////////////////////////////////////////////////////////

	/* Task 4 (What is the most favorite color) */

	var max = 0;
	var mostFavorite = new Object();

	for (var property in colors) {
		if (colors[property] > max){
			max = colors[property];
		} else {
			continue;
		}
	}

	for (var property in colors) {
		if (colors[property] === max) {
			mostFavorite[property] = max;
			var result = console.log("Color " + property + " is most popular and and appear " + max + " times.")
		} else {
			continue;
		}
	}
	return result;

	/////////////////////////////////////////////////////////////

	/* Task 5 (Find out not unique names first_name if there are such
) */

	var notUniqueNames = new Object();

	for (var i = 0; i < users.length; i++) {
		var first_names = users[i].first_name;
		if (!notUniqueNames.hasOwnProperty(first_names)) {
			notUniqueNames[first_names] = 1;
		} else {
			notUniqueNames[first_names]++;
		}
	}

	var appearNum = notUniqueNames[name];

	for (var name in notUniqueNames) {
		if (notUniqueNames[name] > 1) {
			var appearNum = notUniqueNames[name];
			var result = console.log(name + " is not an unique name and appears " + appearNum + " times");
		} else {
			continue;
		}
	}

	return result;

}