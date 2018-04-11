let app = {

    

    init: function(){
        app.connect();
    },

    connect: function(){

    }
}

let deviceready = ('deviceready' in document)?'deviceready':'DOMContentLoaded';
document.addEventListener(deviceready, app.init);
