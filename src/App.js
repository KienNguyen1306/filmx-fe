import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import dataRouter from "./routers/index";
import DefaultLayout from "./pages/DefaultLayout";
import { useDispatch } from "react-redux";
import { actFetchAllGenreAsync } from "./store/genre/action";
import { actFetchAllCountryAsync } from "./store/country/action";
import { actFetchAllActorAsync } from "./store/actor/action";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchAllGenreAsync());
    dispatch(actFetchAllCountryAsync());
    dispatch(actFetchAllActorAsync());
  }, [dispatch]);
  const handleContextMenu = (e) => {
    // e.preventDefault(); // Ngăn chặn hành động chuột phải mặc định
  };


  return (
    <div onContextMenu={handleContextMenu}>
      <BrowserRouter>
        <Routes>
          {dataRouter.map((router, index) => {
            let Page = router.element;
            let Layout = DefaultLayout;
            if (router.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
