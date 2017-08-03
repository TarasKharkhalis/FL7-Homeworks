function Casino(numberOfSlotMachines, initialAmountOfMoney) {
	var arr = [];
	var moneyForOneMachine = Math.round(initialAmountOfMoney / numberOfSlotMachines);
	var tempSum = moneyForOneMachine * numberOfSlotMachines;

	if(tempSum !== initialAmountOfMoney) {
		var remnant = initialAmountOfMoney - tempSum;
		for (var i = 0; i < numberOfSlotMachines; i++) {
			arr.push(moneyForOneMachine);
		}
		arr[0] = arr[0] + remnant;
	} else {
		for (var i = 0; i < numberOfSlotMachines; i++) {
			arr.push(moneyForOneMachine);
		}
	}
	return arr;


	this.getTotalAmmount = function() {
		console.log(arr.reduce(function(sum, value) {
			return sum + value;
		}));
	}

	this.totalNumberOfMachines = function() {
		console.log(arr.length);
	}
	addSlotMachine.prototype = Object.create(SlotMachine.prototype);

	this.addSlotMachine = function(amountOfMoney) {
		SlotMachine.call(this);
		var max = 0;
		for(var i = 0; i < numberOfSlotMachines; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		arr.push(max / 2);
		numberOfSlotMachines++;
	}

	this.removeMachineByNumber = function(i) {
		for (var i = 0; i < arr; i++) {
				arr.splice(i, 1);
		}
	}
}

function SlotMachine(amountPassed) {
	
}

console.log(Casino(3, 1000));
console.log(Casino(4, 1000));