//реализовать функцию bind
var sum = function() {
    return [].reduce.call(arguments, function(result, current) {
        return result + current;
    }, this.sum);
};
var bind = function(func, context) {
    var bindArgs = [].slice.call(arguments, 2);
    return function() {
        var funcArgs = [].slice.call(arguments);
        return func.apply(context, bindArgs.concat(funcArgs));
    };
};

var bindedSum = bind(sum, { sum: 20 }, 30, 40);
var funcArgs = [].slice.call(arguments);
return func.apply(context, bindArgs.concat(funcArgs));
};
};

var bindedSum = bind(sum, { sum: 20 }, 30, 40);

console.log(bindedSum(50, 60, 70)); // 270