import Transaction from "../types/Transaction"
import type TransactionDto from "../types/TransactionDto"

const data: TransactionDto[] = [
	{
		"rowId": 1,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-01",
		"transactionDay": "2023-01-01",
		"valutaDay": "2023-01-01",
		"reference": "AHLENS Mall of S",
		"description": "AHLENS Mall of S",
		"amount": -253.52,
		"saldo": 49746.48
	},
	{
		"rowId": 2,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-01",
		"transactionDay": "2023-01-01",
		"valutaDay": "2023-01-01",
		"reference": "STORA COOP SUNDB",
		"description": "STORA COOP SUNDB",
		"amount": -371.17,
		"saldo": 49375.310000000005
	},
	{
		"rowId": 3,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-01",
		"transactionDay": "2023-01-01",
		"valutaDay": "2023-01-01",
		"reference": "Max Burgers 2010",
		"description": "Max Burgers 2010",
		"amount": -146.97,
		"saldo": 49228.340000000004
	},
	{
		"rowId": 4,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-01",
		"transactionDay": "2023-01-01",
		"valutaDay": "2023-01-01",
		"reference": "FrånLudmil",
		"description": "FrånLudmil",
		"amount": -248.92,
		"saldo": 48979.420000000006
	},
	{
		"rowId": 5,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-02",
		"transactionDay": "2023-01-02",
		"valutaDay": "2023-01-02",
		"reference": "SCRUM ALLIANCE I",
		"description": "SCRUM ALLIANCE I",
		"amount": -19.07,
		"saldo": 48960.350000000006
	},
	{
		"rowId": 6,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-03",
		"transactionDay": "2023-01-03",
		"valutaDay": "2023-01-03",
		"reference": "VIMLA* 072281147",
		"description": "VIMLA* 072281147",
		"amount": -383.33,
		"saldo": 48577.020000000004
	},
	{
		"rowId": 7,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-03",
		"transactionDay": "2023-01-03",
		"valutaDay": "2023-01-03",
		"reference": "Apoteket Mall of",
		"description": "Apoteket Mall of",
		"amount": -435.56,
		"saldo": 48141.46000000001
	},
	{
		"rowId": 8,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-04",
		"transactionDay": "2023-01-04",
		"valutaDay": "2023-01-04",
		"reference": "MIO MALL OF SCA",
		"description": "MIO MALL OF SCA",
		"amount": -3233.72,
		"saldo": 44907.740000000005
	},
	{
		"rowId": 9,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-04",
		"transactionDay": "2023-01-04",
		"valutaDay": "2023-01-04",
		"reference": "GOOGLE *YouTubeP",
		"description": "GOOGLE *YouTubeP",
		"amount": -175.69,
		"saldo": 44732.05
	},
	{
		"rowId": 10,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-05",
		"transactionDay": "2023-01-05",
		"valutaDay": "2023-01-05",
		"reference": "ITAMAE SUSHI OC",
		"description": "ITAMAE SUSHI OC",
		"amount": -28.53,
		"saldo": 44703.520000000004
	},
	{
		"rowId": 11,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-05",
		"transactionDay": "2023-01-05",
		"valutaDay": "2023-01-05",
		"reference": "SOFRA JAKOBSBERG",
		"description": "SOFRA JAKOBSBERG",
		"amount": -24.48,
		"saldo": 44679.04
	},
	{
		"rowId": 12,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-05",
		"transactionDay": "2023-01-05",
		"valutaDay": "2023-01-05",
		"reference": "APOTEKSGRUPPEN",
		"description": "APOTEKSGRUPPEN",
		"amount": -35.52,
		"saldo": 44643.520000000004
	},
	{
		"rowId": 13,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-05",
		"transactionDay": "2023-01-05",
		"valutaDay": "2023-01-05",
		"reference": "SF-bokhandelns",
		"description": "SF-bokhandelns",
		"amount": -30.11,
		"saldo": 44613.41
	},
	{
		"rowId": 14,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-05",
		"transactionDay": "2023-01-05",
		"valutaDay": "2023-01-05",
		"reference": "Gateau Centralen",
		"description": "Gateau Centralen",
		"amount": -2138.87,
		"saldo": 42474.54
	},
	{
		"rowId": 15,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-06",
		"transactionDay": "2023-01-06",
		"valutaDay": "2023-01-06",
		"reference": "ILLUMS BOLIGHUS",
		"description": "ILLUMS BOLIGHUS",
		"amount": -161.95,
		"saldo": 42312.590000000004
	},
	{
		"rowId": 16,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-06",
		"transactionDay": "2023-01-06",
		"valutaDay": "2023-01-06",
		"reference": "4508106 Pressbyr",
		"description": "4508106 Pressbyr",
		"amount": -12.22,
		"saldo": 42300.37
	},
	{
		"rowId": 17,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-06",
		"transactionDay": "2023-01-06",
		"valutaDay": "2023-01-06",
		"reference": "Foot Locker Inc",
		"description": "Foot Locker Inc",
		"amount": -238.56,
		"saldo": 42061.810000000005
	},
	{
		"rowId": 18,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-06",
		"transactionDay": "2023-01-06",
		"valutaDay": "2023-01-06",
		"reference": "Max Burgers 2010",
		"description": "Max Burgers 2010",
		"amount": -31.06,
		"saldo": 42030.75000000001
	},
	{
		"rowId": 19,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-06",
		"transactionDay": "2023-01-06",
		"valutaDay": "2023-01-06",
		"reference": "HEMKÖP SOLNA MAL",
		"description": "HEMKÖP SOLNA MAL",
		"amount": -108.86,
		"saldo": 41921.89000000001
	},
	{
		"rowId": 20,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-06",
		"transactionDay": "2023-01-06",
		"valutaDay": "2023-01-06",
		"reference": "KJELL & CO 21",
		"description": "KJELL & CO 21",
		"amount": -24.93,
		"saldo": 41896.96000000001
	},
	{
		"rowId": 21,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-07",
		"transactionDay": "2023-01-07",
		"valutaDay": "2023-01-07",
		"reference": "HORNBACH SUNDBYB",
		"description": "HORNBACH SUNDBYB",
		"amount": -216.96,
		"saldo": 41680.00000000001
	},
	{
		"rowId": 22,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-07",
		"transactionDay": "2023-01-07",
		"valutaDay": "2023-01-07",
		"reference": "LIQPAY*SL",
		"description": "LIQPAY*SL",
		"amount": -249.77,
		"saldo": 41430.23000000001
	},
	{
		"rowId": 23,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-07",
		"transactionDay": "2023-01-07",
		"valutaDay": "2023-01-07",
		"reference": "PAYSEND EU DAC",
		"description": "PAYSEND EU DAC",
		"amount": -62.61,
		"saldo": 41367.62000000001
	},
	{
		"rowId": 24,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-10",
		"transactionDay": "2023-01-10",
		"valutaDay": "2023-01-10",
		"reference": "Comviq",
		"description": "Comviq",
		"amount": -2785.88,
		"saldo": 38581.74000000001
	},
	{
		"rowId": 25,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-10",
		"transactionDay": "2023-01-10",
		"valutaDay": "2023-01-10",
		"reference": "MIO MALL OF SCA",
		"description": "MIO MALL OF SCA",
		"amount": -187.11,
		"saldo": 38394.63000000001
	},
	{
		"rowId": 26,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-10",
		"transactionDay": "2023-01-10",
		"valutaDay": "2023-01-10",
		"reference": "MSFT * E0100PFK0",
		"description": "MSFT * E0100PFK0",
		"amount": -50.94,
		"saldo": 38343.69000000001
	},
	{
		"rowId": 27,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-11",
		"transactionDay": "2023-01-11",
		"valutaDay": "2023-01-11",
		"reference": "Ticketmaster Sve",
		"description": "Ticketmaster Sve",
		"amount": -3595.28,
		"saldo": 34748.41000000001
	},
	{
		"rowId": 28,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-11",
		"transactionDay": "2023-01-11",
		"valutaDay": "2023-01-11",
		"reference": "Foot Locker Inc",
		"description": "Foot Locker Inc",
		"amount": -301.15,
		"saldo": 34447.26000000001
	},
	{
		"rowId": 29,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-11",
		"transactionDay": "2023-01-11",
		"valutaDay": "2023-01-11",
		"reference": "Spotify P262EECA",
		"description": "Spotify P262EECA",
		"amount": -55.69,
		"saldo": 34391.57000000001
	},
	{
		"rowId": 30,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-12",
		"transactionDay": "2023-01-12",
		"valutaDay": "2023-01-12",
		"reference": "KJELL & CO 109",
		"description": "KJELL & CO 109",
		"amount": -53.53,
		"saldo": 34338.04000000001
	},
	{
		"rowId": 31,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-12",
		"transactionDay": "2023-01-12",
		"valutaDay": "2023-01-12",
		"reference": "816959645786246",
		"description": "816959645786246",
		"amount": -472.09,
		"saldo": 33865.95000000001
	},
	{
		"rowId": 32,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-12",
		"transactionDay": "2023-01-12",
		"valutaDay": "2023-01-12",
		"reference": "ICA SUPERMARKET",
		"description": "ICA SUPERMARKET",
		"amount": -235.06,
		"saldo": 33630.890000000014
	},
	{
		"rowId": 33,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-12",
		"transactionDay": "2023-01-12",
		"valutaDay": "2023-01-12",
		"reference": "APOTEKSGRUPPEN",
		"description": "APOTEKSGRUPPEN",
		"amount": -39.3,
		"saldo": 33591.59000000001
	},
	{
		"rowId": 34,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-14",
		"transactionDay": "2023-01-14",
		"valutaDay": "2023-01-14",
		"reference": "BRODERNAS KUNGSH",
		"description": "BRODERNAS KUNGSH",
		"amount": -48.69,
		"saldo": 33542.90000000001
	},
	{
		"rowId": 35,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-14",
		"transactionDay": "2023-01-14",
		"valutaDay": "2023-01-14",
		"reference": "K*Dagens Nyh",
		"description": "K*Dagens Nyh",
		"amount": -159.64,
		"saldo": 33383.26000000001
	},
	{
		"rowId": 36,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-15",
		"transactionDay": "2023-01-15",
		"valutaDay": "2023-01-15",
		"reference": "Zettle_*Mackverk",
		"description": "Zettle_*Mackverk",
		"amount": -111.18,
		"saldo": 33272.08000000001
	},
	{
		"rowId": 37,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-15",
		"transactionDay": "2023-01-15",
		"valutaDay": "2023-01-15",
		"reference": "PAYSEND EU DAC",
		"description": "PAYSEND EU DAC",
		"amount": -80.46,
		"saldo": 33191.62000000001
	},
	{
		"rowId": 38,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-15",
		"transactionDay": "2023-01-15",
		"valutaDay": "2023-01-15",
		"reference": "YOKU SUSHI THAI",
		"description": "YOKU SUSHI THAI",
		"amount": -209.21,
		"saldo": 32982.41000000001
	},
	{
		"rowId": 39,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-16",
		"transactionDay": "2023-01-16",
		"valutaDay": "2023-01-16",
		"reference": "Moo Thaimassage",
		"description": "Moo Thaimassage",
		"amount": -257.82,
		"saldo": 32724.59000000001
	},
	{
		"rowId": 40,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-16",
		"transactionDay": "2023-01-16",
		"valutaDay": "2023-01-16",
		"reference": "VIMLA* 072281147",
		"description": "VIMLA* 072281147",
		"amount": -106.27,
		"saldo": 32618.32000000001
	},
	{
		"rowId": 41,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-16",
		"transactionDay": "2023-01-16",
		"valutaDay": "2023-01-16",
		"reference": "IKEA Sverige",
		"description": "IKEA Sverige",
		"amount": -169.24,
		"saldo": 32449.08000000001
	},
	{
		"rowId": 42,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-16",
		"transactionDay": "2023-01-16",
		"valutaDay": "2023-01-16",
		"reference": "KJELL & CO 21",
		"description": "KJELL & CO 21",
		"amount": -441.01,
		"saldo": 32008.07000000001
	},
	{
		"rowId": 43,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-16",
		"transactionDay": "2023-01-16",
		"valutaDay": "2023-01-16",
		"reference": "GOOGLE *YouTubeP",
		"description": "GOOGLE *YouTubeP",
		"amount": -483.55,
		"saldo": 31524.52000000001
	},
	{
		"rowId": 44,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-19",
		"transactionDay": "2023-01-19",
		"valutaDay": "2023-01-19",
		"reference": "IHOPA",
		"description": "IHOPA",
		"amount": -249.1,
		"saldo": 31275.420000000013
	},
	{
		"rowId": 45,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-19",
		"transactionDay": "2023-01-19",
		"valutaDay": "2023-01-19",
		"reference": "MIO MALL OF SCA",
		"description": "MIO MALL OF SCA",
		"amount": -27.15,
		"saldo": 31248.27000000001
	},
	{
		"rowId": 46,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-20",
		"transactionDay": "2023-01-20",
		"valutaDay": "2023-01-20",
		"reference": "Comviq",
		"description": "Comviq",
		"amount": -46.16,
		"saldo": 31202.11000000001
	},
	{
		"rowId": 47,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-20",
		"transactionDay": "2023-01-20",
		"valutaDay": "2023-01-20",
		"reference": "PRIS NYCKELKUND",
		"description": "PRIS NYCKELKUND",
		"amount": -39.19,
		"saldo": 31162.920000000013
	},
	{
		"rowId": 48,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-21",
		"transactionDay": "2023-01-21",
		"valutaDay": "2023-01-21",
		"reference": "Moo Thaimassage",
		"description": "Moo Thaimassage",
		"amount": -795.15,
		"saldo": 30367.77000000001
	},
	{
		"rowId": 49,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-23",
		"transactionDay": "2023-01-23",
		"valutaDay": "2023-01-23",
		"reference": "NILSON SHOES 311",
		"description": "NILSON SHOES 311",
		"amount": -443.94,
		"saldo": 29923.830000000013
	},
	{
		"rowId": 50,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-23",
		"transactionDay": "2023-01-23",
		"valutaDay": "2023-01-23",
		"reference": "Ticketmaster Sve",
		"description": "Ticketmaster Sve",
		"amount": -96.69,
		"saldo": 29827.140000000014
	},
	{
		"rowId": 51,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-24",
		"transactionDay": "2023-01-24",
		"valutaDay": "2023-01-24",
		"reference": "Material",
		"description": "Material",
		"amount": -34.68,
		"saldo": 29792.460000000014
	},
	{
		"rowId": 52,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-24",
		"transactionDay": "2023-01-24",
		"valutaDay": "2023-01-24",
		"reference": "APOTEKSGRUPPEN",
		"description": "APOTEKSGRUPPEN",
		"amount": -45.79,
		"saldo": 29746.670000000013
	},
	{
		"rowId": 53,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-24",
		"transactionDay": "2023-01-24",
		"valutaDay": "2023-01-24",
		"reference": "YOKU SUSHI THAI",
		"description": "YOKU SUSHI THAI",
		"amount": -829.51,
		"saldo": 28917.160000000014
	},
	{
		"rowId": 54,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-24",
		"transactionDay": "2023-01-24",
		"valutaDay": "2023-01-24",
		"reference": "NILSON SHOES 311",
		"description": "NILSON SHOES 311",
		"amount": -338.79,
		"saldo": 28578.370000000014
	},
	{
		"rowId": 55,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-24",
		"transactionDay": "2023-01-24",
		"valutaDay": "2023-01-24",
		"reference": "HORNBACH SUNDBYB",
		"description": "HORNBACH SUNDBYB",
		"amount": -29.07,
		"saldo": 28549.300000000014
	},
	{
		"rowId": 56,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-24",
		"transactionDay": "2023-01-24",
		"valutaDay": "2023-01-24",
		"reference": "ICA KVANTUM MALL",
		"description": "ICA KVANTUM MALL",
		"amount": -230.27,
		"saldo": 28319.030000000013
	},
	{
		"rowId": 57,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-25",
		"transactionDay": "2023-01-25",
		"valutaDay": "2023-01-25",
		"reference": "Max Burgers 2010",
		"description": "Max Burgers 2010",
		"amount": -35.13,
		"saldo": 28283.900000000012
	},
	{
		"rowId": 58,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-25",
		"transactionDay": "2023-01-25",
		"valutaDay": "2023-01-25",
		"reference": "816959645786246",
		"description": "816959645786246",
		"amount": -13.16,
		"saldo": 28270.740000000013
	},
	{
		"rowId": 59,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-26",
		"transactionDay": "2023-01-26",
		"valutaDay": "2023-01-26",
		"reference": "ICA SUPERMARKET",
		"description": "ICA SUPERMARKET",
		"amount": -45.11,
		"saldo": 28225.630000000012
	},
	{
		"rowId": 60,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-26",
		"transactionDay": "2023-01-26",
		"valutaDay": "2023-01-26",
		"reference": "4508106 Pressbyr",
		"description": "4508106 Pressbyr",
		"amount": -979.04,
		"saldo": 27246.59000000001
	},
	{
		"rowId": 61,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-26",
		"transactionDay": "2023-01-26",
		"valutaDay": "2023-01-26",
		"reference": "APOTEKSGRUPPEN",
		"description": "APOTEKSGRUPPEN",
		"amount": -1513.95,
		"saldo": 25732.64000000001
	},
	{
		"rowId": 62,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-26",
		"transactionDay": "2023-01-26",
		"valutaDay": "2023-01-26",
		"reference": "ICA NARA JARVAST",
		"description": "ICA NARA JARVAST",
		"amount": -269.71,
		"saldo": 25462.93000000001
	},
	{
		"rowId": 63,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-26",
		"transactionDay": "2023-01-26",
		"valutaDay": "2023-01-26",
		"reference": "STEAM PURCHASE",
		"description": "STEAM PURCHASE",
		"amount": -233.56,
		"saldo": 25229.37000000001
	},
	{
		"rowId": 64,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-26",
		"transactionDay": "2023-01-26",
		"valutaDay": "2023-01-26",
		"reference": "Apoteket Mall of",
		"description": "Apoteket Mall of",
		"amount": -468.31,
		"saldo": 24761.06000000001
	},
	{
		"rowId": 65,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-29",
		"transactionDay": "2023-01-29",
		"valutaDay": "2023-01-29",
		"reference": "SOOK MoS",
		"description": "SOOK MoS",
		"amount": -36.3,
		"saldo": 24724.76000000001
	},
	{
		"rowId": 66,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-29",
		"transactionDay": "2023-01-29",
		"valutaDay": "2023-01-29",
		"reference": "Gateau Centralen",
		"description": "Gateau Centralen",
		"amount": -826.8,
		"saldo": 23897.96000000001
	},
	{
		"rowId": 67,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-29",
		"transactionDay": "2023-01-29",
		"valutaDay": "2023-01-29",
		"reference": "IHOPA",
		"description": "IHOPA",
		"amount": -400.68,
		"saldo": 23497.28000000001
	},
	{
		"rowId": 68,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-29",
		"transactionDay": "2023-01-29",
		"valutaDay": "2023-01-29",
		"reference": "POWER Sverige AB",
		"description": "POWER Sverige AB",
		"amount": -139.72,
		"saldo": 23357.56000000001
	},
	{
		"rowId": 69,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-29",
		"transactionDay": "2023-01-29",
		"valutaDay": "2023-01-29",
		"reference": "GOOGLE *YouTubeP",
		"description": "GOOGLE *YouTubeP",
		"amount": -262.04,
		"saldo": 23095.520000000008
	},
	{
		"rowId": 70,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-29",
		"transactionDay": "2023-01-29",
		"valutaDay": "2023-01-29",
		"reference": "Zettle_*Mille la",
		"description": "Zettle_*Mille la",
		"amount": -165.92,
		"saldo": 22929.60000000001
	},
	{
		"rowId": 71,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-30",
		"transactionDay": "2023-01-30",
		"valutaDay": "2023-01-30",
		"reference": "Gateau Centralen",
		"description": "Gateau Centralen",
		"amount": -246.04,
		"saldo": 22683.56000000001
	},
	{
		"rowId": 72,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-30",
		"transactionDay": "2023-01-30",
		"valutaDay": "2023-01-30",
		"reference": "K*Dagens Nyh",
		"description": "K*Dagens Nyh",
		"amount": -61.5,
		"saldo": 22622.06000000001
	},
	{
		"rowId": 73,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-30",
		"transactionDay": "2023-01-30",
		"valutaDay": "2023-01-30",
		"reference": "YOKU SUSHI THAI",
		"description": "YOKU SUSHI THAI",
		"amount": -1768.09,
		"saldo": 20853.97000000001
	},
	{
		"rowId": 74,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-30",
		"transactionDay": "2023-01-30",
		"valutaDay": "2023-01-30",
		"reference": "POWER Sverige AB",
		"description": "POWER Sverige AB",
		"amount": -239.49,
		"saldo": 20614.480000000007
	},
	{
		"rowId": 75,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-30",
		"transactionDay": "2023-01-30",
		"valutaDay": "2023-01-30",
		"reference": "APOTEKSGRUPPEN",
		"description": "APOTEKSGRUPPEN",
		"amount": -215.19,
		"saldo": 20399.290000000008
	},
	{
		"rowId": 76,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-30",
		"transactionDay": "2023-01-30",
		"valutaDay": "2023-01-30",
		"reference": "NATURKOMPANIET /",
		"description": "NATURKOMPANIET /",
		"amount": -233.76,
		"saldo": 20165.53000000001
	},
	{
		"rowId": 77,
		"clearingNumber": "01234",
		"accountNumber": "0123456789",
		"product": "Privatkonto",
		"valuta": "SEK",
		"accountingDay": "2023-01-31",
		"transactionDay": "2023-01-31",
		"valutaDay": "2023-01-31",
		"reference": "AHLENS Mall of S",
		"description": "AHLENS Mall of S",
		"amount": -34.12,
		"saldo": 20131.41000000001
	}
];

const allTransactions: Transaction[] = data.map(dto => new Transaction(dto));

export { allTransactions }