import { BrowserRouter } from 'react-router-dom'
import { QueryProvider } from './providers'
import { AppRoutes } from './routes'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/shared/errors'
import { Header } from './components/header'
import { queryClient } from './lib/tanstack'

export const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Error caught by boundary:', error, errorInfo)
      }}
      onReset={() => {
        queryClient.clear()
        window.location.href = '/'
      }}
    >
      <BrowserRouter>
        <QueryProvider>
          <Header />
          <AppRoutes />
        </QueryProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
