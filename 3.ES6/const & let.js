const a = 9;
let a = {};
//const ： 定义的时候就要赋值变量。切变量的基础值和引用指针不能发生改变
//let : 可以定义不赋值，且可以发生改变；

//暂存死区： 两者申明变量后会得到隐式的变量提升；也就是放到暂存死区；在一个作用域里面
//有且仅当函数执行到定义变量的时候才可访问，否则会爆红：不能再初始化前使用该变量
