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
	"23D6BYA6P66RBDZV5X45Z4WCOUHHX7CH",
	"2AEWTD7MGAZD3HTB2SSUM7B7W72FQNUZ",
	"MBRO6VVWF7BGWQ6D36KYV633SPLCIPTR",
	"MP4LWJAIEAMC3QK3CFWYH4W2E72S4BXY",
	"MVZAMDPIGZQ5YD37JUIULY4CYSA6ZRBW",
	"NGRPZUQFM22XGNZIBJ65PYDKIJ3O5PBW",
	"OEQIPSWVDGBCBECE3PBG3ENVE3WWBVIO",
	"RLPSC3VOIT4HSC7NXTUGZX7RKXVVBFEE",
	"RVU2FGNQDNDO6CKXX6IJV7U37SCFIXUE",
	"UYOBBT2CBK2WRCQ2UEHI75IK3N5RXWKN",
	"XEZ5ULG7NUA4IGRGRIH7ZYPSY2BJA7UK",
	"XQ7PQ3ZLE5MEESCX2CV3PPKIWHFKQ3H6"
];

exports.initial_peers = [
	'wss://dlos.cn/ds's
];

//exports.trustedRegistries = {
//	'AM6GTUKENBYA54FYDAKX2VLENFZIMXWG': 'market'
//};

console.log('finished hub conf');
