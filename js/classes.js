class Account {
    constructor(name, accNo, balance) {
        this.name = name
        this.account_number = accNo
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("insufficient balance")
        }else{
            this.balance -= amount
        }
    }
    printDetails(){
        console.log(`${this.name} ${this.account_number} ${this.balance}USD`)
    }
}

let acc1 =new Account("Abdi","002",70000)
let acc2 =new Account("Juma","052",86000)
acc1.deposit(6000)
acc1.printDetails()
acc1.withdraw(300)
acc1.printDetails()