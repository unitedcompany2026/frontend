import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { LoadingScreen } from '@/components/shared/loaders'
import { ProtectedRoutes } from './ProtectedRoutes'
import Contact from '@/pages/Contact'
import Partner from '@/pages/Partners'
import Property from '@/pages/Property'

const Home = lazy(() => import('@/pages/Home'))
const Signin = lazy(() => import('@/pages/Signin'))
const Signup = lazy(() => import('@/pages/Signup'))
const Admin = lazy(() => import('@/pages/Admin'))
const Unauthorized = lazy(() => import('@/pages/Unauthorized'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.SIGNIN} element={<Signin />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.PARTNER} element={<Partner />} />
        <Route path={ROUTES.PROPERTY} element={<Property />} />
        <Route path={ROUTES.UNAUTHORIZED} element={<Unauthorized />} />

        <Route element={<ProtectedRoutes redirectTo={ROUTES.SIGNIN} />}></Route>

        <Route
          element={
            <ProtectedRoutes
              requiredRole="admin"
              redirectTo={ROUTES.UNAUTHORIZED}
            />
          }
        >
          <Route path={ROUTES.ADMIN} element={<Admin />} />
        </Route>

        {/* Catch-all for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
