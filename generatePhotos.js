
const photos = async () => {
   
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();
        return data
    } catch (error) {
        return error
        



}
}



module.exports = photos;