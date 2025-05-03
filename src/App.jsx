import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import Footer from "./components/Footer";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { movieAction } from "./store/store";

//44b5188feee10f18171ebe1f776fc384

function App() {

  const dispatch = useDispatch()
  
  const fetchTrendingData = async () =>{
    try{
      const response = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=44b5188feee10f18171ebe1f776fc384');
      const data = await response.json();
      
      dispatch(movieAction.setBannerData(data.results));
    }catch (error){
      console.log("error: ", error)
    }
  }

  const fetchConfiguration = async () => {
    try{

      const response = await fetch('https://api.themoviedb.org/3/configuration?api_key=44b5188feee10f18171ebe1f776fc384');
      const data = await response.json();

      dispatch(movieAction.setImageURL(data.images.secure_base_url+"original"));

    }catch(error){
      console.log("error: ", error)
    }
  }

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);
  return (
    <main className='pb-14 lg:pb-0'>
      <Header/>
      <div className='min-h-[90vh]'>
        <Outlet/>
      </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  );
}

export default App
