import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import NoPage from "./pages/NoPage";
import PeoplePage from "./pages/PeoplePage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* set up page routes so we can switch pages w/ links */}
                <Route path="/" exact element={<Home />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </BrowserRouter>
    )
}