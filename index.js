#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 10000;
let myPin = 12233;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: " enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === 12233) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "Fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your amount",
                types: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`your remaining balance is ${balance}`);
            console.log("thank you for using our service");
        }
        else {
            console.log(`insufficient balance`);
        }
    }
    //if user select fast cash
    else if (operationAns.operation === "Fast cash") {
        let FastcashAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"],
            },
        ]);
        if (FastcashAns.amount <= myBalance) {
            let balance2 = myBalance - FastcashAns.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log(` You have insufficient amount`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your remaining balance is :" + myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
