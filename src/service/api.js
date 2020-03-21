
let baseURL= process.env.REACT_APP_API_URL;

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