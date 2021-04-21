var obj = JSON.parse('{"countryCode":{"MK":{"style":"MKD"}, "EN": {"style":"£"}, "US": {"style":"$"}} }');
var styleObj;

function ipLookUp() {
    $.ajax('http://ip-api.com/json')
        .then(
            function success(response) {
                console.log('User\'s Country Code', response.countryCode);                
                styleObj = obj.countryCode[response.countryCode].style;
                $('.currency').text(styleObj);
            },

            function fail(data, status) {
                console.log('Request failed. Returned status of',
                    status);
            }
        );
}
ipLookUp()

