import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./router.data";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(r => {
            return(
              <Route 
              key={r.path} 
              path={r.path} 
              element={<r.component/>}
              />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default Router