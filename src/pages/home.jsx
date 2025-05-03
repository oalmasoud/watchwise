import { useSelector } from "react-redux"
import BannerHome from "../components/BannerHome"
import HorizontalScrollCard from "../components/HorizontalScrollCard"
import useFetch from "../hooks/useFetch";
export default function HomePage()
{
    const trendingData = useSelector(state => state.movieData.bannerData);
    const {data: nowPlayingData, loading: nowPlayingLoading} = useFetch("/movie/now_playing?");
    const {data: topRatedData, loading: topRatedLoading} = useFetch("/movie/top_rated?");
    const {data: popularTVData, loading: popularTVLoading} = useFetch("/tv/popular?");
    const {data: upComingData, loading: upcomingLoading} = useFetch("/movie/upcoming?");

    
    
    return(
        <div>
            <BannerHome/>
            <HorizontalScrollCard data={trendingData} heading={"Trending"} trending/>
            {
                nowPlayingLoading ? <p>Loading...</p> : <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
            }
            {
                topRatedLoading ? <p>Loading...</p> : <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
            }
            {
                upcomingLoading ? <p>Loading...</p> : <HorizontalScrollCard data={upComingData} heading={"Upcoming Movies"} media_type={"movie"}/>
            }
            {
                popularTVLoading ? <p>Loading...</p> : <HorizontalScrollCard data={popularTVData} heading={"Popular TV Shows"} media_type={"tv"}/>
            }

        </div>
    )
}