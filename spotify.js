/**
 * Name: Michael Kinuthia
 */
var http = require('http');
//cb is call back
function getJSON(options, cb){
	http.request(options, function(res){
		var body = '';
		res.on('data', function(chunk){
			body += chuck;
		});
		res.on('end', function(){
			var profile = JSON.parse(body);
			cd(null, result);
		});
		res.on('error', cb);
	})
	.on('error', cb)
	.end();
}
// URL and athentication to get the users profile
var options = {
		host: 'https://accounts.spotify.com',
		port: 80,
		path: '/authorize/?client_id=454635523aed47e9be328bc8e0d1c3a2',
		method: 'GET'
};
//Response handling and logging the response to console
getJSON(options, function(err, result){
	if(err){
		return console.log('Error while trying to get the profile', err);
	}
	console.log(result);
})
