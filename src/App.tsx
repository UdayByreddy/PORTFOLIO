import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Suspense } from "react";
import Home from "./pages/Home/Home";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";


export function AppWrapper (){
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

    </Suspense>
  )
}
export default function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}
