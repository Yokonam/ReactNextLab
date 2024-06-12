import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home'
import { Page1 } from '../Page1'
import { Page2 } from '../Page2'
import { Page1Routes } from './Page1Routes'
import { Page2Routes } from './Page2Routes'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />}>
        {Page1Routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/page2" element={<Page2 />}>
        {Page2Routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}
