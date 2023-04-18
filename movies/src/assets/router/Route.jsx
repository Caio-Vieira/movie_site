import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../../pages/home/Home"
import Details from "../../pages/details/Details"


export function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
        </BrowserRouter>
    )
}