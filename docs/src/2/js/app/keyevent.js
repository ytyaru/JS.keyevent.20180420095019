define(function() {
    var C = {};
    C._Logs = []; // キー押下状態の保持（ひとつ以上のキーが押下されているときのみ）
    C.Initialize = function() {
	window.document.onkeyup = function(e){
	    C._Logging(e);
	}
	window.document.onkeypress = function(e){
	    C._Logging(e);
	}
    }
    C._Logging = function(e) {
	console.log(e, 'key', e.key, 'code', e.code);
	C._Logs.push({'key': e.key, 'code': e.code, 'state': e.type, 'time': e.timeStamp});
	document.body.innerHTML = document.body.innerHTML + C._Message(e);
	document.body.scrollTop = document.body.scrollHeight;
    }
    C._Message = function(e) {
	return 'key:' + e.key + ' code:' + e.code + ' state:' + e.type + ' time:' +  e.timeStamp + '<br/>';
    }
    return C;
});
