import { LoanDetails } from './types';

export default interface LoanCalculatorService {
    calculateNext(loanDetails: LoanDetails): LoanDetails;
    generate(loanDetails: LoanDetails): LoanDetails[];    
    refund(loanDetails: LoanDetails[], month: number, amount: number): LoanDetails[];
    flush(loanDetails: LoanDetails[]): void;
}