$.instagram.addEventListener('load', function(e){
    if(undefined !== e.source.url){
    	var url = e.source.url.replace('#_', '');
        var code = url.replace(Alloy.CFG.ig_callback + '?code=', '');
        var error = url.replace(Alloy.CFG.ig_callback + '?error_reason=', '');
        if(code != url) {
            Alloy.Globals.http.post('sessions', {
                id_install : Ti.Platform.id,
                client : Ti.App.id,
                version : Ti.App.version,
                code : code
            });
        } else if(error != e.source.url) {
            alert('We need your authorization to let you in');
        }
    }
});

$.instagram.url = 'https://api.instagram.com/oauth/authorize/?client_id=' + Alloy.CFG.ig_client_id + '&redirect_uri=' + Alloy.CFG.ig_callback + '&response_type=code&scope=relationships+likes+comments&display=touch';