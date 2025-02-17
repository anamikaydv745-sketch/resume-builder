import { Link } from "react-router"

export const Navbar = () => {
    return (
        <header aria-label="Site header" className="bg-white sticky top-0 h-14 border-b-2 border-gray-100 px-3 lg:px-12 flex items-center">
            <div className="flex h-10 w-full items-center justify-between">
                <Link to="/">
                    <span className="font-bold text-xl">Resume Builder</span>
                </Link>
                <nav aria-label="Site nav bar" className="flex items-center gap-2 text-sm font-medium">
                    <Link to="/builder">Builder</Link>
                </nav>
            </div>
        </header>
    )
}