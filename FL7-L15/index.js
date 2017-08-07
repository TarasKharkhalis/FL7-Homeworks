function Unit(name, attack, hitpoints) {
	this.name = name;
	this.attack = attack;
	this.hitpoints = hitpoints;
	this.totalHitpoints = hitpoints
}

Unit.prototype.getHitpoints = function() {
	return this.hitpoints;
}

Unit.prototype.setHitpoints = function(num) {
	this.hitpoints = num;
}

Unit.prototype.getTotalHitpoints = function() {
	return this.totalHitpoints;
}

Unit.prototype.setTotalHitpoints = function(num) {
	this.totalHitpoints = Math.abs(num);
}

Unit.prototype.getAttack = function() {
	return this.attack;
}

Unit.prototype.setAttack = function(num) {
	this.attack = Math.abs(num);
}

Unit.prototype.isAlive = function() {
	if(this.hitpoints > 0) {
		return true;
	} else {
		return false;
	}
}

Champion.prototype = Object.create(Unit.prototype);
Monster.prototype = Object.create(Unit.prototype);

function Champion(obj) {
	Unit.call(this, obj.name, obj.attack, obj.hitpoints);
	this.defence = false;
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

Champion.prototype.rest = function() {
	if(this.hitpoints < this.totalHitpoints) {
		this.hitpoints += 5;
	}
}

Champion.prototype.defence = function() {
	this.defence = true;
}

function Monster(obj) {
	Unit.call(this, obj.name, obj.attack, obj.hitpoints);
	this.enrage = false;
	this.count = 0;
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

Monster.prototype.enrage = function() {
	this.enrage = true;
}

module.exports = {
  Champion: Champion,
  Monster: Monster,
  extend: extend
}
