window.fbAsyncInit = function () {
    FB.init({
        appId: '382227889350218',
        cookie: true,
        xfbml: true,
        version: 'v4.0'
    });

    FB.AppEvents.logPageView();

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
});

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        testAPI();
    } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
    } else {
        document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
    }
}

//取得用戶資料
function GetProfile() {

    //FB.api()使用說明：https://developers.facebook.com/docs/javascript/reference/FB.api
    //取得用戶個資
    FB.api("/me", "GET", { fields: 'last_name,first_name,name,email,user_photos,user_friends' }, function (user) {
        //user物件的欄位：https://developers.facebook.com/docs/graph-api/reference/user
        if (user.error) {
            console.log(response);
        } else {
            
            console.log(JSON.stringify(user));
        }
    });

}
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}
function testAPI() {
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
    });

}