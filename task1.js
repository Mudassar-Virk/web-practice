class BankAccount{
constructor(ownername, balance){

    this.oname= ownername;
    this.balan= balance;
}


deposit(amount){
    this.balan+= amount;
console.log(`Your deposit amount is  ${amount} and current balance is ${this.balan}` );


}

withdraw(amount){

this.balan-= amount;
console.log(`now balance is ${this.balan}`)

}

getinfo(){

    console.log(`account owner is ${this.oname} and balance is ${this.balan}`)
}

}

let x= new BankAccount("Mudassar",1500);
x.deposit(1000);
x.getinfo();
x.withdraw(500);