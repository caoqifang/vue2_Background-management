// 封装  模块化登陆正则验证
// 用户名匹配
export function naemRule(rule, value, callback) {
    // 请输入4-10位用户名
    let reg = /^[a-zA-Z0-9]{4,10}$/;
    if (value === "") {
        callback(new Error("请输入用户名"));
    } else if (!reg.test(value)) {
        callback(new Error("请输入4-10位用户名"));
    } else {
        callback();
    }
}
// 密码匹配
export function passRule(rule, value, callback) {
    // 6-12位密码 需要包含大小写字母  和数字以及特殊符号
    let pass =
        /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    if (value === "") {
        callback(new Error("请输入密码"));
    } else if (!pass.test(value)) {
        callback(
            new Error("请输入6-12位密码，需要包含大小写字母和数字以及特殊符号")
        );
    } else {
        callback();
    }
}

// 查询学生匹配
export function queryStudent(rule, value, callback) {
    // 只能有汉字
    let pass = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/;
    if (value === "") {
        // callback(new Error("请输入姓名查询！"));
    } else if (!pass.test(value)) {
        callback(
            new Error("只可以输入汉字")
        );
    } else {
        callback(

        );
    }
}

// 纯数字校验规则
export function getNumber(rule, value, callback) {
    let pass = /^\d+$/;
    if (value === '') {
        callback(new Error(' 请输入年龄'))
    } else if (!pass.test(value)) {
        callback(new Error('只可以输入纯数字'))
    } else {
        callback();
    }
}
// 姓名校验
export function checkName(rule, value, callback) {
    let pass = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
    if (value === '') {
        callback(new Error(' 请输入姓名'))
    } else if (!pass.test(value)) {
        callback(new Error('请输入正确的姓名'))
    } else {
        callback();
    }
}

// 手机号校验
export function checkPhone(rule, value, callback) {
    let pass = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
    if (value === '') {
        callback(new Error(' 请输手机号'))
    } else if (!pass.test(value)) {
        callback(new Error('请输入正确的手机号'))
    } else {
        callback();
    }
}