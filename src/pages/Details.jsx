import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import useFetchDetail from '../hooks/useFetchDetail';
import moment from 'moment'
import Divider from '../components/Divider';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
export default function DetailsPage()
{
    const { id, explore } = useParams();
    const imageURL = useSelector(state => state.movieData.imageURL);
    const { data } = useFetchDetail(`/${explore}/${id}`);
    const {data:castData} = useFetchDetail(`/${explore}/${id}/credits`);
    const {data: similarData} = useFetchDetail(`/${explore}/${id}/similar`);
    const {data: recommendationData} = useFetchDetail(`/${explore}/${id}/recommendations`);


    const duration = (Number(data?.runtime)/60).toFixed(1).split(".");
    const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(ele => ele?.name)?.join(", ")
    return(
        <div>
            <div className='w-full h-[450px] relative hidden lg:block'>
                    <div className='w-full h-full'>
                        <img
                            src={imageURL+data?.backdrop_path}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'>

                    </div>
            </div>
            <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
                <div className='relative mx-auto lg:-mt-28 lg:mx-0  w-fit min-w-60'>
                    <img
                        src={imageURL+data?.poster_path}
                        className='h-80 w-60 object-cover rounded'
                    />
                </div>

                <div>
                    <h2 className='text-2xl lg:text-4xl font-bold text-white'>{data?.title || data?.name}</h2>
                    <p className='text-neutral-400 '>{data?.tagline}</p>
                    
                    <Divider/>

                    <div className='flex items-center gap-3'>
                        <p>
                            Rating : {Number(data?.vote_average).toFixed(1)}+
                        </p>
                        <span>|</span>
                        <p>
                            View : {Number(data?.vote_count)}
                        </p>
                        <span>|</span>
                        <p>
                            Duration : {duration[0]}h {duration[1]}m
                        </p>
                    </div>

                    <Divider/>

                    <div>
                        <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
                        <p>{data?.overview}</p>

                        <Divider/>

                        <div className='flex items-center gap-3 my-3 text-center'>
                            <p>Status : {data?.status}</p>
                            <span>|</span>
                            <p>Release Date : {moment(data?.release_date).format("MMMM Do YYYY")}</p>
                        </div>

                        <Divider/>

                    </div>

                    <div>
                        <p><span className='text-white'>Director</span> : {castData?.crew[0]?.name}</p>
                        <Divider/>
                        <p><span className='text-white'>Writer</span> : {writer}</p>
                    </div>
                    <Divider/>
                    <h2 className='font-bold text-lg'>Casts : </h2>
                    <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5'>
                        {
                            castData?.cast?.filter(el => el?.profile_path).map((cast,index) => {
                                return(
                                    <div key={cast?.id+"casts"+index}>
                                        <div>
                                            <img
                                                src={imageURL+cast?.profile_path}
                                                className='w-24 h-24 object-cover rounded-full'
                                            />
                                        </div>
                                        <p className='font-bold text-center text-sm text-neutral-400'>
                                            {cast?.name}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <HorizontalScrollCard data={similarData?.results || []} heading={"Similar "+explore} media_type={explore}/>
                <HorizontalScrollCard data={recommendationData?.results || []} heading={"Recommendation "+explore} media_type={explore}/>
                
            </div>
        </div>
    )
}