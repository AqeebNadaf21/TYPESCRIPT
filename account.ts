class Account {

    // class properties
   protected owner: string;
   protected balance: number;

    // The `constructor` method can take parameters to initialize the properties of the class.
    constructor(owner: string, balance: number) {

        this.owner = owner;
        this.balance = balance; // undefined
    }

   // class methods 

   deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited ${amount} into ${this.owner}'s account`);
   }

   withdrow(amount: number) {
    if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`withdrow ${amount} from ${this.owner}'s account`);
        
    } else {
        console.log(`Insufficient funds for ${this.owner}'s to withdrow ${amount}`);
    }
   }

   checkBalance() {
    console.log(`Balance for ${this.owner}'s account : ${this.balance}`);
   }

}

class SavingAccount extends Account {

    private interestRate : number;

    constructor(owner: string, balance: number, interestRate: number) {
        super(owner,balance);
        this.interestRate = interestRate; // 4
    }

    applyIntrest() {
        const intrestAmount = this.balance * (this.interestRate / 100);
        this.deposit(intrestAmount);
        console.log(`Applied ${this.interestRate}% intrest to ${this.owner}'s savings account.`);
        
    }

}


class CheckingAccount extends Account {

    private overdraftLimit : number;

    constructor(owner: string, balance: number, overDraftLimit: number) {
        super(owner, balance);
        this.overdraftLimit = overDraftLimit;
    }
    withdrow(amount: number) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from ${this.owner}'s checking account`);
            
        } else {
            console.log(`Exceeded overdraft limit for ${this.owner} to withdraw ${amount}`);
            
        }
    }
}



// create the instances of SavingAccount and CheckingAccount


let savingAccount = new SavingAccount('codemind', 1000, 1.5);
let checkingAccount = new CheckingAccount('Jack', 500, 100);


// perform operations on the objects .


savingAccount.checkBalance(); // 
savingAccount.applyIntrest();
savingAccount.checkBalance();


checkingAccount.checkBalance();
checkingAccount.withdrow(600);
checkingAccount.checkBalance();









