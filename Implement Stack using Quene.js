var Stack = function () {
    this.stack = [];
};
Stack.prototype.push = function (x) {
    this.stack[this.stack.length] = x;
};
Stack.prototype.pop = function (x) {
    var x = this.stack[this.stack.length-1];
    this.stack.length --;
    return x;
};
Stack.prototype.top = function () {
    if (this.stack.length > 0){
        return this.stack[this.stack.length-1];        
    }
};
Stack.prototype.empty = function () {
    return this.stack.length === 0 ? true : false;
};

var stack1 = new Stack();
stack1.push(1);