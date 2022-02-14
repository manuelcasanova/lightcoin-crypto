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
      if (!this.isAllowed()) return false;
      this.time = new Date();
      this.account.addTransaction(this);
      return true;
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

isAllowed () {
  return this.account.balance - this.amount >= 0;
}

typeOfTransaction () {
  return "withdrawal"
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

isAllowed () {
  return true;
}

typeOfTransaction () {
  return "deposit"
}

}

// class Account {
//   constructor(username) {
//     this.username = username;
//     this.balance = 0;
//   }
// }
//Let's modify the Account class to be able to keep track of the transactions.

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }


  get balance() {
    let balance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      balance += this.transactions[i].value; //Sum the value of each transaction
    }
    return balance;
  }

    // get balance() {
  //   let balance = 0;
  //   for (let trans of this.transactions) {
  //     balance += trans.value; //Sum the value of each transaction with for loop
  //   }
  //   return balance;
  // }


  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

Driver code

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();

console.log(`Transaction: ${t1.amount}`);
console.log(`Balance: ${myAccount.balance}`);

console.log(`First transaction is a ${t1.typeOfTransaction}`);

const Account1 = new Account("Manuel");

t1 = new Deposit(100.00, Account1);
t1.commit();

console.log(`Transaction: ${t1.amount}`);
console.log(`Balance: ${Account1.balance}`);

console.log("Second transaction");

t2 = new Withdrawal(50, Account1);
t2.commit();
console.log(`Transaction: ${t2.amount}`);
console.log(`Balance: ${Account1.balance}`);

console.log("Third transaction");

t3 = new Withdrawal(49, Account1);
t3.commit();
console.log(`Transaction: ${t3.amount}`);
console.log(`Balance: ${Account1.balance}`);

console.log("Final transaction, supposed to fail");

t3 = new Withdrawal(2, Account1);
t3.commit();
console.log(`Transaction: ${t3.amount}`);
console.log(`Balance: ${Account1.balance}`);

//Should fail because at this point there was 1 left in the account

//The last transaction fails, because the balance stays in 1 (you cannot withdraw 2) but what it prints seems to me like it's accepting the transaction (although it does not actually)
