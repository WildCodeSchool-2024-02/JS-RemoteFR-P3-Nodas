import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/Accueil";
import Catalogue from "./pages/Catalogue";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import Favoris from "./pages/Favoris";
import Basket from "./pages/Basket";
import About from "./pages/About";
import GamePage from "./pages/GamePage";
import GameAdvisor from "./pages/GameAdvisor";
import { FavoriteProvider } from "./contexts/FavoriteContext";
import { ShopProvider } from "./contexts/ShopContext";

import {
  fetchData,
  fetchGameById,
  fetchSelectedGenre,
  fetchCategories,
  fetchSearchFilters,
  fetchGameInfo,
} from "./services/request";
import "./styles/app.css";
import "./styles/gamespages.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/accueil.css";
import "./styles/categorieitem.css";
import "./styles/categories.css";
import "./styles/catalogue.css";
import "./styles/favoris.css";
import "./styles/about.css";
import "./styles/gameadvisor.css"
import "./styles/searchdialog.css";
import "./styles/basket.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
        loader: fetchData,
      },
      {
        path: "/catalog/:game",
        element: <Catalogue />,
        loader: ({ params }) => fetchGameInfo(params.game),
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: fetchCategories,
      },
      {
        path: "/categories/:genres",
        element: <Category />,
        loader: ({ params }) => fetchSelectedGenre(params.genres),
      },
      {
        path: "/favoris",
        element: <Favoris />,
        loader: () => fetchData().then((data) => data),
      },
      {
        path: "/basket",
        element: <Basket />,
        loader: () => fetchData().then((data) => data),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gamepage/:id",
        element: <GamePage />,
        loader: ({ params }) => fetchGameById(params.id).then((data) => data),
      },
      {
        path: "/reco",
        element: <GameAdvisor />,
        loader: fetchSearchFilters,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ShopProvider>
      <FavoriteProvider>
        <RouterProvider router={router} />
      </FavoriteProvider>
    </ShopProvider>
  </React.StrictMode>
);
