import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <div className="bg-bgColor font-Roboto">
                <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                        <div className="border-t border-gray-200 text-center pt-8">
                            <h1 className="text-6xl py-6 font-bold text-primary">404</h1>
                            <p className="text-2xl pb-8 px-12 font-medium">
                                Oops! The page you are looking for does not exist. It might have
                                been moved or deleted.
                            </p>
                            <button className="bg-primary text-white font-semibold px-6 py-2 rounded-md">
                                <Link to="/">
                                    Go Back to Home page
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound