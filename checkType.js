/**
 * JS有三种方法，可以确定一个值是什么类型
 * typeof运算符
 * instanceof运算符
 * Object.prototype.toString方法
 */


//typeof运算符返回一个值的{{{{数据类型}}}}
typeof 123;             //"number"
typeof '123';           //"string"
typeof false;           //"boolean"
typeof function () { }; //"function"
typeof undefined;       //"undefined"      
//typeof可以用来检查一个没有声明的变量而不报错；
if (typeof v === "undefined") {

}
typeof null;            //"object"
typeof NULL;            //"undefined"
typeof {};              //"object"
typeof [];              //"object"  空数组（[]）的类型也是object，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。
//这里顺便提一下，instanceof运算符可以区分数组和对象。


//instanceof 返回布尔值，表示!!!!{{{{对象}}}}!!!!是否为某个构造函数的实例
//下面这两种写法是等价的
//由于instanceof检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回true
//原型链的尽头是NULL
var v = new Array();
v instanceof Array;                      //true
v instanceof Object;                     //true
Array.prototype.isPrototypeOf(v);        //true
Object.prototype.isPrototypeOf(v);       //true
//如果左边对象的原型链上只有null对象，instanceof判断会失真,造成这个原因是因为null比object大吖。
var obj = Object.create(null);
typeof obj;                             //"object"
obj instanceof Object;                  //false
//此外
undefined instanceof Object;            //false
null instanceof Object;                 //false


//对象的toString可以检测对象类型
var toString = Object.prototype.toString;
toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
//其他方法是转化为字符串
123..toString();//"123"
123...toString();//Uncaught SyntaxError: Unexpected token .
123.toString();//Uncaught SyntaxError: Invalid or unexpected token


//检查是不是数组
Array.isArray([])           //true
Array.isArray({})           //false


//为什么null作为原型链的最后一个环节却不能作为右边的原型对象,null其实还是算基本类型还是OBJECT对象呢。
