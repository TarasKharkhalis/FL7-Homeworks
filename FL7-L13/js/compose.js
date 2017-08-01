var compose = function() {
    var ourFunc = arguments;
    return function() {
        var argum = arguments;
        for (var i = ourFunc.length; i --> 0;) {
            argum = [ourFunc[i].apply(this, argum)];
        }
        return argum[0];
    };
};

module.exports = compose;

// const toUpper = string => string.toUpperCase();
// const classyGreeting = (firstName, lastName) =>
// "The name's " + lastName + ", " + firstName + " " + lastName;
// const yellGreeting = compose(
//   toUpper,
//   classyGreeting,
// );

// console.log(yellGreeting('James', 'Bond'));
