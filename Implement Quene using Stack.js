/**
 * 构造函数  prototype是函数的属性，本质上是函数的原型对象
 */
var Quene = function(){
    this.quene = [];
};
Quene.prototype.push = function(x){
    this.quene[this.quene.length] = x;
};
Quene.prototype.pop = function(){
    if(this.quene.length>0){
    this.quene.shift();        
    };
};
Quene.prototype.peek = function(){
    if(this.quene.length>0){
        return this.quene[0];
    };
};
Quene.prototype.empty = function(){
    return this.quene.length === 0 ? true : false;
}
//用队列新建一个实例才可以用到prototype属性 
var quene1 = new Quene();
quene1.push(1);                //1进队列
quene1.quene;                 //当前数组
quene1.pop();
quene1.push(2);
quene1.peek();
quene1.empty();




