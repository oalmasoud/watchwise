import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home";
import SearchPage from "../pages/Search";
import ExplorePage from "../pages/Explore";
import DetailsPage from "../pages/Details";

const router = createBrowserRouter([
    {   
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            },
            {
                path: ":explore",
                element: <ExplorePage/>
            },
            {
                path: ":explore/:id",
                element: <DetailsPage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            },
            
        ]

    }
]);

export default router;