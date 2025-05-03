import { useSelector } from "react-redux";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
export default function BannerHome()
{
    const bannerData = useSelector(state => state.movieData.bannerData);
    const imageURL = useSelector(state => state.movieData.imageURL);
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) =>
            prev === bannerData.length - 1 ? 0 : prev + 1
        );
    };
    
    const handlePrev = () => {
        setCurrentImage((prev) =>
            prev === 0 ? bannerData.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
            prev === bannerData.length - 1 ? 0 : prev + 1
        );
        }, 6000);
        return () => clearInterval(interval);
    }, [bannerData]);

    return(
        <section className='w-full h-full'>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
                {
                    bannerData.map((data, index) => {
                        return(
                            <div className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{transform : `translateX(-${currentImage * 100}%)`}}  key={data.id+"bannerHome"+index}>
                                <div className='w-full h-full'>
                                    <img 
                                            src={imageURL + data.backdrop_path} alt={data.title || data.name} 
                                            
                                            className='h-full w-full object-cover'
                                        />
                                        
                        
                                </div>

                                {/* Button next and prev */}
                                <div className='absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex'>
                                    <button className='bg-white p-1 rounded-full text-xl z-10 text-black cursor-pointer' onClick={handlePrev}>
                                        <FaAngleLeft/>
                                    </button >
                                    <button className='bg-white p-1 rounded-full text-xl z-10 text-black cursor-pointer' onClick={handleNext}>
                                        <FaAngleRight/>
                                    </button>
                                </div>

                                <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>

                                </div>
                                <div className='container mx-auto '>
                                    <div className='w-full  absolute bottom-0 max-w-md px-3'>
                                            <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>{data?.title || data?.name}</h2>
                                            <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                                            <div className='flex items-center gap-4'>
                                                <p>Rating : {Number(data.vote_average).toFixed(1) }+</p>
                                                <span>|</span>
                                                <p>View : {Number(data.popularity).toFixed(0) }</p>
                                            </div>
                                            <button className='bg-white px-4 py-2 text-black font-bold rounded mt-4 cursor-pointer hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105'>
                                                Watch The Trailer
                                            </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}