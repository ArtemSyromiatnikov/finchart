export default interface TransactionDTO {
    rowId: number;            //1,
    clearingNumber: string;  //"12345",
    accountNumber: string;   //"1234564199",
    product: string;         //"Privatkonto",
    valuta: string;          //"SEK",
    accountingDay: string;        //"2023-10-30",
    transactionDay: string; //"2023-10-30",
    valutaDay: string;      //"2023-10-30",
    reference: string;      //"YOKU SUSHI THAI",
    description: string;    //"YOKU SUSHI THAI",
    amount: number;           //-120.00,
    saldo: number;            //6151.48
}