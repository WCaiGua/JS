// function callback(){
//     console.log('Done');
// }
// console.log('before setTimeout()');
// setTimeout(callback,1000);
// console.log('after setTimeout()');

/**
 * promise && ajax
 * They are kind of like apples and knives.you can cut an apple with knife and the knife is a tool that can
 * be applied to an apple,but the two are very different things.
 * Promises are a tool for managing asynchronous operations.
 * They keep track of when asynchronous operations complete and what their results are and let you
 * coordinate that completion and those results(including error conditions)with other code or 
 * other asynchronous operatns in themselves.They aren't actually asynchronous operatioions in themselves.
 * An Ajax call is a specific asynchronous operation that can be used with a traditional 
 * callback interface or wrapped in a promise interface.
 */
/**
 * promises和Ajax调用。
 * 它们有点像苹果和刀子。你可以用刀切苹果，刀是一种可以应用于苹果的工具，但两者是非常不同的东西。
 * Promise是一种管理异步操作的工具。
 * 它们跟踪异步操作何时完成以及它们的结果是什么，并让您与其他代码或其他异步操作协调完成和那些结果（包括错误条件）。它们本身并不是异步操作。
 * Ajax调用是一种特定的异步操作，可以与传统的回调接口一起使用，也可以包含在promise接口中。
 */
// function f(a){
//     console.log(a);
//     a = 456;
//     console.log(a);
// }
// var a = 123;
// f(a);
// console.log(a);
// 状态一旦确定便不可再变
// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         // setTimeout(resolve,ms,'done');
//         setTimeout(reject, ms, 'false');
//     });
// }
// timeout(100).catch((value) => {
//     console.log(value);
// });


let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    // resolve();
    reject();
})
promise.then(function () {
    console.log('resolved.');
},function(){
    console.log('reject.');
});
console.log('Hi!');

