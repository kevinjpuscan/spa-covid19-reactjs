
let baseURL= "https://api.covid19api.com/";

async function apiGet(endPoint) {
    try {
        let data=await fetch(`${baseURL}${endPoint}`);
        let result=await data.json();
        return {
            status:data.status,
            data: result
        };
    } catch (error) {
        return error;
    }
} 

export default apiGet;