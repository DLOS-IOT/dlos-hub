/*jslint node: true */
"use strict";

exports.clientName = 'dlos';
exports.minClientVersion = '1.0.0';

// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

// iOS Push Notifications APNS config
exports.APNsAuthKey = ''; // *.p8 filepath or buffer with key itself
exports.keyId = '';
exports.teamId = '';

exports.port = 6688;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'root@dlos.cn';
exports.bugs_from_email = 'bugs@dlos.cn';

exports.HEARTBEAT_TIMEOUT = 300*1000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
	"3REWT2XK4X4ORWENLSNRGSZQWPUSX7Q7",
	"4CSNAVZD7HCWNFPJDCN5OHYWO46RPINA",
	"6AJA7MG3JE6337BTBSQDPHVSX55XPDJ4",
	"7JSUVE6IJWBQEA4XGZH5X2OW5R5EE4TC",
	"AAAMCEHXFEKP3IPCDFF73S7A7GKTZSEQ",
	"AQYICR6LMQISF2NTMLRHK3FR652FPRII",
	"CZIWNX7L3OYEQA7INV62KFLXKFRU3HVV",
	"JIX2WWZMTTKUPELRZSON55LWLV6XX53N",
	"K54BNVYW5RFLZSHAM4TKVAYLG34XTY3G",
	"PNP5ZZYGBKQBT6KFIOZ67VUYEN22DE6H",
	"RVLOJTX76Y2NKHS5NEBN2RTQWHPXWMHE",
	"STUGOHL3VVP666EJMYOIDTNK6LEOWPTN"
];

/* new testnet
exports.initial_witnesses = [
	'2FF7PSL7FYXVU5UIQHCVDTTPUOOG75GX',
	'2GPBEZTAXKWEXMWCTGZALIZDNWS5B3V7',
	'4H2AMKF6YO2IWJ5MYWJS3N7Y2YU2T4Z5',
	'DFVODTYGTS3ILVOQ5MFKJIERH6LGKELP',
	'ERMF7V2RLCPABMX5AMNGUQBAH4CD5TK4',
	'F4KHJUCLJKY4JV7M5F754LAJX4EB7M4N',
	'IOF6PTBDTLSTBS5NWHUSD7I2NHK3BQ2T',
	'O4K4QILG6VPGTYLRAI2RGYRFJZ7N2Q2O',
	'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD',
	'PA4QK46276MJJD5DBOLIBMYKNNXMUVDP',
	'RJDYXC4YQ4AZKFYTJVCR5GQJF5J6KPRI',
	'WELOXP3EOA75JWNO6S5ZJHOO3EYFKPIR'
];
*/

exports.initial_peers = [
	'wss://dlos.cn/ds'
];

//exports.trustedRegistries = {
//	'AM6GTUKENBYA54FYDAKX2VLENFZIMXWG': 'market'
//};

console.log('finished hub conf');
