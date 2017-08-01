var bindMe = function() {
	var a = Array.prototype.slice,
        f = a.call(arguments, 1),
        e = this,
        c = function() {},
        d = function() { 
        	return e.apply(this instanceof c ? this : b || window, f.concat(a.call(arguments))); 
        };
	c.prototype = this.prototype;
	d.prototype = new c();
	return d;
}