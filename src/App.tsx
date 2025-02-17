import { createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home";
import about from "./pages/about";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Jobs from "./pages/Jobs";


function App() {

  return (
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Routepath="/" Element={<RootLayout />}>
        <route indext element={<home />} />
        <route indext element={<about />} />
        <route indext element={<Product />} />
        <route indext element={<Contact />} />
        <route indext element={<Jobs />} />
        </Route>
      )
    );
    return (
      <RouterProvider router={router} />
    )
    <>
    </>
  )
}

export default App
