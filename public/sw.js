



const CACHE_NAME = "version-1";
   

this.addEventListener("install", (e)=>{
    
    e.waitUntil(
 
        caches.open(CACHE_NAME).then((cache) =>{
            console.log("Cache open");
            
        })
    )
})

    this.addEventListener('fetch',(e)=>{
        e.respondWith(
            caches.match(e.request).then(result =>{
                if(result){
                    return result;
                }
            })
        );
    });

    
