let app = {
    baseURL: 'YOUR-OWN-URL',
    device_id: null,
    token: null,
    pages: [],
    currentPerson: 0,
    init: function() {
        app.connect();
    },
    
    connect: function() {
        // create a session for the current app user
        if('device' in window){  
            app.device = device.uuid;
            console.log(app.device);
        }else{
            app.device = '1234567890abcdef';
        }
        let url = `${app.baseURL}connect/?device_id=${app.device}`;
        console.log(url);
        fetch(url)
        .then(function(response){
            if (response.ok) {
                return response.json();
              } else {
                throw new Error('Something went wrong');
              }
        })
        .then(function(data){
            if(data.code==0){
                //save the token to be used later
                app.token = data.token;
                console.log("Token is ", app.token);
                //get the people
                // app.getPeople();
            }else{
               console.log("error") 
            }
        })
        .catch(function(err){
            console.log("Error ", err);
        });
    }
}

let deviceready = ('deviceready' in document)?'deviceready':'DOMContentLoaded';
document.addEventListener(deviceready, app.init);
