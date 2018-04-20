define(function() {
    var C = {};
    C._Logs = []; // キー押下状態の保持（ひとつ以上のキーが押下されているときのみ）
    C._DownLogs = []; // キー押下状態の保持（ひとつ以上のキーが押下されているときのみ）
    C._UpLogs = []; // キー押下状態の保持（ひとつ以上のキーが押下されているときのみ）
    C.Initialize = function() {
	window.document.onkeyup = function(e){
	    C._UpLogs.push({'key': e.key, 'code': e.code, 'state': e.type, 'time': e.timeStamp});
	    C._Logging(e);
	    C._DelLog();
	}
	window.document.onkeydown = function(e){
	    if (C._DownLogs.length == 0 || e.code != C._DownLogs[C._DownLogs.length-1].code) {
		C._DownLogs.push({'key': e.key, 'code': e.code, 'state': e.type, 'time': e.timeStamp});
		C._Logging(e);
	    }
	}
    }
    C._Logging = function(e) {
	console.log(e, 'key', e.key, 'code', e.code);
	C._Logs.push({'key': e.key, 'code': e.code, 'state': e.type, 'time': e.timeStamp});
	document.body.innerHTML = document.body.innerHTML + C._Message(e);
    }
    C._DelLog = function(e) {
	if (0 < C._DownLogs.length && C._DownLogs.length == C._UpLogs.length) {
	    C._DownLogs.lenght = 0;
	    C._UpLogs.lenght = 0;
	    C._Logs.lenght = 0;
	    document.body.innerHTML = '';
	}
    }
    C._Message = function(e) {
	return 'key:' + e.key + ' code:' + e.code + ' state:' + e.type + ' time:' +  e.timeStamp + '<br/>';
    }
    C._IsFire = function(e) {
	if (e.key == ' ') {}
    }
    return C;
});
