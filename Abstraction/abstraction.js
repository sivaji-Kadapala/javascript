
class Abstraction{
    constructor(withdraw,balance){
        this.balance=balance;
        this.minimum=500;
        this.withdraw=withdraw;
    }
getAmount(){
    if((this.balance-this.withdraw)>=this.minimum){
       document.write("Withdraw Successfull")
    }else{
             document.write("Withdraw Failed")
    }
}
}
let a=prompt("Enter a:");
let b=prompt("Enter b:");
let obj=new Abstraction(a,b);
obj.getAmount();