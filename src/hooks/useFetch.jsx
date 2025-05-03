import {useEffect, useState} from 'react'

const useFetch = (endpoint)=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () =>{
        try{
            setLoading(true);
            const response = await fetch(`https://api.themoviedb.org/3${endpoint}api_key=44b5188feee10f18171ebe1f776fc384`);
            const data = await response.json();
            setLoading(false);
            setData(data.results);


        }catch(error){
            console.log("error", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [endpoint])
    return {
        data, loading
    }
}

export default useFetch;