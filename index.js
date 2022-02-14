//SETUP AND DEPOSIT CLASS

// let balance = 500.00;

// class Withdrawal {

//   constructor(amount) {
//     this.amount = amount;
//   }

//   commit() {
//     balance -= this.amount;
//   }
// }

// class Deposit {

//   constructor(amount) {
//     this.amount = amount;
//   }

//   commit() {
//     balance += this.amount;
//   }


// }




// // DRIVER CODE BELOW
// // We use the code below to "drive" the application logic above and make sure it's working as expected

// t1 = new Withdrawal(50.25);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', balance);

// t3 = new Withdrawal(39.76);
// t3.commit();
// console.log('Transaction 3:', t3);

// console.log('Balance:', balance);

// t4 = new Deposit(100.00);
// t4.commit();
// console.log('Transaction 4:', t4);

// console.log('Balance:', balance);


//ACCOUNT CLASS


// class Account {
//   constructor(username, balance) {
//     this.username = username;
//     this.balance = 0;
//   }
// }
// class Withdrawal {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.account.balance -= this.amount;
//   }
// }

// class Deposit {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.account.balance += this.amount;
//   }


// }

// //Driver code

// const myAccount = new Account("snow-patrol");

// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();

// console.log(`Transaction: ${t1.amount}`);
// console.log(`Balance: ${myAccount.balance}`);

//TRANSACTION CLASS

class Transaction {

    constructor(amount, account) {
      this.amount = amount;
      this.account = account;
    }

    commit() {
    this.account.balance += this.value;
  }

}


class Withdrawal extends Transaction {

  // commit() {
  //   this.account.balance -= this.amount;
  // }
//Instead of having commit defined in each subclass, define a getter method called value in each subclass.
get value() {
  return -this.amount; //why not .value?
}

}

class Deposit extends Transaction {

  // commit() {
  //   this.account.balance += this.amount;
  // }
//Instead of having commit defined in each subclass, define a getter method called value in each subclass.
get value() {
  return this.amount; //Why not .value?
}

}

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

//Driver code

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();

console.log(`Transaction: ${t1.amount}`);
console.log(`Balance: ${myAccount.balance}`);
