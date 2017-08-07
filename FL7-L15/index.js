function Champion(obj) {
	this.name = obj.name;
	this.attack = obj.attack;
	this.hitpoints = obj.hitpoints;
	this.totalHitpoints = obj.hitpoints;
	this.defence = false;
}

Champion.prototype.getHitpoints = function() {
	return this.hitpoints;
}

Champion.prototype.setHitpoints = function(num) {
	this.hitpoints = num;
}

Champion.prototype.getTotalHitpoints = function() {
	return this.totalHitpoints;
}

Champion.prototype.setTotalHitpoints = function(num) {
	this.totalHitpoints = Math.abs(num);
}

Champion.prototype.getAttack = function() {
	return this.attack;
}

Champion.prototype.setAttack = function(num) {
	this.attack = Math.abs(num);
}

Champion.prototype.fight = function(obj) {
	if (this.name !== obj.name) {
		this.defence ? console.log("Your attack was blocked!") : obj.hitpoints = obj.hitpoints - this.attack;
		if (obj.hitpoints === 0) {
			this.attack++;
		}
	} else {
		console.log('You can not attack yourself!');
	}
}

Champion.prototype.isAlive = function() {
	if(this.hitpoints > 0) {
		return true;
	} else {
		return false;
	}
}

Champion.prototype.rest = function() {
	if(this.hitpoints < this.totalHitpoints) {
		this.hitpoints += 5;
	}
}

Champion.prototype.defence = function() {
	this.defence = true;
}

function Monster(obj) {
	this.name = obj.name;
	this.attack = obj.attack;
	this.hitpoints = obj.hitpoints;
	this.totalHitpoints = obj.hitpoints;
	this.enrage = false;
	this.count = 0;
}

Monster.prototype.getHitpoints = function() {
	return this.hitpoints;
}

Monster.prototype.setHitpoints = function(num) {
	this.hitpoints = num;
}

Monster.prototype.getTotalHitpoints = function() {
	return this.totalHitpoints;
}

Monster.prototype.setTotalHitpoints = function(num) {
	this.totalHitpoints = Math.abs(num);
}

Monster.prototype.getAttack = function() {
	return this.attack;
}

Monster.prototype.setAttack = function(num) {
	this.attack = Math.abs(num);
}

Monster.prototype.fight = function(obj) {
	if (this.name != obj.name) {
		if(this.enrage && this.count != 2) {
			obj.hitpoints -= (this.attack * 2);
			this.count++;
		} else {
			obj.hitpoints = obj.hitpoints - this.attack;
			this.count = 0;
		}
		if (obj.hitpoints === 0) {
			this.hitpoints += Math.floor(obj.totalHitpoints * 0.25);
			this.totalHitpoints += Math.floor(obj.totalHitpoints * 0.1);
		}
	} else {
		console.log('You can not attack yourself!');
	}
}

Monster.prototype.isAlive = function() {
	if(this.hitpoints > 0) {
		return true;
	} else {
		return false;
	}
}

Monster.prototype.enrage = function() {
	this.enrage = true;
}

module.exports = {
  Champion: Champion,
  Monster: Monster,
  extend: extend
}
