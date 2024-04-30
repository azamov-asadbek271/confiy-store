import { useRouteError, Link } from "react-router-dom";
function Error() {
    const error = useRouteError()
     if(error.status == "404") {
        return (
            <main className="min-h-screen grid place-content-center text-neutral">
                <div className="text-center">
                    <h2 className="font-bold text-primary text-5xl lg:text-7xl mb-3">404</h2>
                    <p className="lg:text-6xl text-4xl font-bold mb-8">Page Not Found</p>
                    <Link className="btn btn-sm lg:btn-md btn-primary" to="/"> Back Home</Link>
                </div>
            </main>
        )
     }
  return (
    <main className="min-h-screen grid place-content-center text-neutral">
      <div className="text-center">
        <h2 className="font-bold text-primary text-4xl lg:text-6xl mb-3">
          Upps...!
        </h2>
        <p className="lg:text-5xl text-3xl font-bold mb-8">Something went wrong</p>
        <Link className="btn btn-sm lg:btn-md btn-primary" to="/">
          Back Home
        </Link>
      </div>
    </main>
  );
}

export default Error