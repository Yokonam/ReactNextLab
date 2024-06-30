import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Top } from '../pages/Top'
import { Users } from '../pages/Users'
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}
