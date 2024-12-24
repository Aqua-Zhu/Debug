import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/shop" element={<Shop />}></Route>
            </Routes>
        </>
    )
}


