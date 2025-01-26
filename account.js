var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    // The `constructor` method can take parameters to initialize the properties of the class.
    function Account(owner, balance) {
        this.owner = owner;
        this.balance = balance; // undefined
    }
    // class methods 
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, " into ").concat(this.owner, "'s account"));
    };
    Account.prototype.withdrow = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("withdrow ".concat(amount, " from ").concat(this.owner, "'s account"));
        }
        else {
            console.log("Insufficient funds for ".concat(this.owner, "'s to withdrow ").concat(amount));
        }
    };
    Account.prototype.checkBalance = function () {
        console.log("Balance for ".concat(this.owner, "'s account : ").concat(this.balance));
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(owner, balance, interestRate) {
        var _this = _super.call(this, owner, balance) || this;
        _this.interestRate = interestRate; // 4
        return _this;
    }
    SavingAccount.prototype.applyIntrest = function () {
        var intrestAmount = this.balance * (this.interestRate / 100);
        this.deposit(intrestAmount);
        console.log("Applied ".concat(this.interestRate, "% intrest to ").concat(this.owner, "'s savings account."));
    };
    return SavingAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(owner, balance, overDraftLimit) {
        var _this = _super.call(this, owner, balance) || this;
        _this.overdraftLimit = overDraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdrow = function (amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log("Withdrawn ".concat(amount, " from ").concat(this.owner, "'s checking account"));
        }
        else {
            console.log("Exceeded overdraft limit for ".concat(this.owner, " to withdraw ").concat(amount));
        }
    };
    return CheckingAccount;
}(Account));
// create the instances of SavingAccount and CheckingAccount
var savingAccount = new SavingAccount('codemind', 1000, 1.5);
var checkingAccount = new CheckingAccount('Jack', 500, 100);
// perform operations on the objects .
savingAccount.checkBalance(); // 
savingAccount.applyIntrest();
savingAccount.checkBalance();
checkingAccount.checkBalance();
checkingAccount.withdrow(600);
checkingAccount.checkBalance();
