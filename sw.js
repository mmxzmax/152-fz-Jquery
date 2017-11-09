
self.addEventListener('fetch',function(event){
    event.respondWith(
        fetch('/drevil.gif').then(function(response){
            "use strict";
            return(response);
        })
    );
});
