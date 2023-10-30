import type TransactionDto from "./TransactionDto";

export default class Transaction {
    rowId: number = 1;                  // 1,
    clearingNumber: string = "";        // "12345",
    accountNumber: string = "";         // "1234564199",
    product: string = "";               // "Privatkonto",
    valuta: string = "SEK";             // "SEK",
    accountingDay: Date = new Date();   // "2023-10-30",
    transactionDay: Date = new Date();  // "2023-10-30",
    valutaDay: Date = new Date();       // "2023-10-30",
    reference: string = "";             // "YOKU SUSHI THAI",
    description: string = "";           // "YOKU SUSHI THAI",
    amount: number = 0;                 // -120.00,
    saldo: number = 0;                  // 6151.48

    constructor(dto: TransactionDto) {
        this.rowId = dto.rowId;
        this.clearingNumber = dto.clearingNumber;
        this.accountNumber = dto.accountNumber;
        this.product = dto.product;
        this.valuta = dto.valuta;
        this.accountingDay = new Date(dto.accountingDay);
        this.transactionDay = new Date(dto.transactionDay);
        this.valutaDay = new Date(dto.valutaDay);
        this.reference = dto.reference;
        this.description = dto.description;
        this.amount = dto.amount;
        this.saldo = dto.saldo;
    }
}