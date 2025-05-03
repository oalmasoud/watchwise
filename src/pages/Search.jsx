import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

export default function SearchPage()
{
    const location = useLocation();
    const[fetchedData,setFetchedData] = useState([]);
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search).get("q");

    const fetchData = async () =>{
        try{
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=44b5188feee10f18171ebe1f776fc384&query=${query}`);
            const data = await response.json();

            setFetchedData((prev) => {
                return[
                    ...prev,
                    ...data.results
                ]
            })
        }catch(error){
            console.log("error", error)
        }
    }

    useEffect(() => {
        setFetchedData([]);
        fetchData();
    },[location.search])

    

    
    return(
        <div className='py-16'>
            <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
                <input
                    type="text" 
                    placeholder="Search here..." 
                    onChange={(e) => navigate(`/search?q=${e.target.value}`)} 
                    className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900'
                    />
            </div>
            <div className='container mx-auto'>
                <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Search Results</h3>
                <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
                    {
                        fetchedData.map((SearchData, index) => {
                            
                            return(
                                    <Card data={SearchData} key={SearchData.id+"SearchSection"+index} media_type={SearchData.media_type}/>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}