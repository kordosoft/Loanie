export default interface LoanDetails {    
    amount: number;
    months: number;
    annualInterestRate: number;
    
    readonly monthlyInterestRate: number;
    readonly monthlyInterestFactor: number;
    readonly monthlyPayment: number;
    readonly currentMonthFactor: number;
    readonly monthlyInterest: number;
    readonly monthlyPrincipal: number;

    flush();
    refund(amount: number);
}
