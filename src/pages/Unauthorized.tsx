export default function Unauthorized() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">403</h1>
        <p className="mt-2 text-lg">
          You don't have permission to access this page
        </p>
      </div>
    </div>
  )
}
