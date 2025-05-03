import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card"
export default function ExplorePage()
{
    const params = useParams();
    const [pageNo, setPageNo] = useState(1);
    const [fetchedData, setFetchedData] = useState([]);
    const [totalPageNo, setTotalPageNo] = useState(0);

    const fetchData = async () => {
        if (!["movie", "tv"].includes(params.explore)) {
            console.warn("Invalid media type:", params.explore);
            return;
        }
    
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/${params.explore}?api_key=44b5188feee10f18171ebe1f776fc384&page=${pageNo}`
            );
            const data = await response.json();
    
            if (Array.isArray(data.results)) {
                setFetchedData(prev => [...prev, ...data.results]);
                setTotalPageNo(data.total_pages);
            } else {
                console.error("Unexpected API response", data);
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };

    const handleScroll = () =>{
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            setPageNo(prev => prev + 1)
        }
    }

    useEffect(() => {
        fetchData()
    },[pageNo]);

    useEffect(() => {
        setPageNo(1);
        setFetchedData([]);
        fetchData();
    }, [params.explore])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return(
        <div className='py-16'>
            <div className='container mx-auto'>
                <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Popular {params.explore === "tv" ? "TV Shows" : `${params.explore}s`}</h3>
                <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
                    {
                        fetchedData.map((exploreData, index) => {
                            return(
                                <Card data={exploreData} key={exploreData.id+"exploreSection"+index} media_type={params.explore}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}