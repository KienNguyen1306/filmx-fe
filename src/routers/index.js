import WatchPage from "../pages/WatchPage";
import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/Homepage";
import AdminPage from "../pages/AdminPage";
import CaterogyPage from "../pages/CaterogyPage";


const dataRouter = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/caterogy/:id",
    element: CaterogyPage,
  },
  {
    path: "/search",
    element: SearchPage,
  },

  {
    path: "/watch/:movieID",
    element: WatchPage,
  },
  {
    path: "/admin",
    element: AdminPage,
    layout: null,
  },
  {
    path: "/admin/movie",
    element: AdminPage,
    layout: null,
  },
];

export default dataRouter;
