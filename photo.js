

async function fetchPhoto() {
    try {
        let response = await fetch("https://randomphotos.onrender.com/photos");
        let data = await response.json();
        
for(let i=0;i < 5;i++){
    console.log(data[i]);
    
}
        

        
    }catch(error){
        console.log(error.message);
        
    }

}

fetchPhoto()