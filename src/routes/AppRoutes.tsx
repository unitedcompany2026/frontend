import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { LoadingScreen } from '@/components/shared/loaders'
import { ProtectedRoutes } from './ProtectedRoutes'
import Contact from '@/pages/Contact'
import Property from '@/pages/Property'
import PartnerProjects from '@/pages/PartnerProjects'
import Project from '@/pages/Project'
import Partners from '@/pages/Partners'
import AllProjects from '@/pages/AllProjects'

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
        <Route path={ROUTES.PARTNERS} element={<Partners />} />
        <Route path={ROUTES.PARTNER_PROJECTS} element={<PartnerProjects />} />
        <Route path={ROUTES.PROJECT} element={<Project />} />
        <Route path={ROUTES.ALL_PROJECTS} element={<AllProjects />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
