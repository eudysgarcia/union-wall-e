import { BrowserRouter, Routes, Route as ReactRoute } from 'react-router-dom'
import Home from '../views/home.tsx'

export default function Route() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <ReactRoute path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}