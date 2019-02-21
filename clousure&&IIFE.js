/**
 * 闭包最大的用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终
 * 保持在内存中，即闭包可以使得它诞生环境一直存在。
 * 下面的例子，闭包使内部变量记住上一次调用时的运算结果
 */
function createIncrementor(start) {
    return function () {
        return start++;
    }
}
var inc = createIncrementor(5);
inc();
inc();
inc();                      //所以闭包可以看作是函数内部作用域的一个接口

/**
 * 闭包的另一个用处，是封装私有变量和私有方法
 * @param {*} name 
 */

function Person(name) {
    var _age;
    function setAge(n) {
        _age = n;
    }
    function getAge() {
        return _age;
    }
    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}
var p1 = Person('张三');
p1.setAge(25);
p1.getAge();     //外层函数每次运行，都会生成一个新的闭包，
                 //而这个闭包又会保留外层函数的内部变量，所以
                 //内存消耗很大。不能滥用，否则会造成网页的性能问题


/**
 *通常只对匿名函数使用这种"立即执行的函数表达式"。
 *目的：1：不必为函数命名，避免污染全局变量；
 *2:IIFE内部形成了一个单独的作用域，可以封闭一些外部无法读取的私有变量
 */
(function(){
    var tmp = newData;
    processData(tmp);
    storeData(tmp);
}());