import { Link } from "react-router";

const Navbar = () => {

    return (
        <nav className="bg-[#A12648] h-15 flex px-4 justify-between items-center text-[#FFEAB4]">
            <Link to="/">Home</Link>
            <ul className="flex gap-4 no-underline">
                <li><Link to="/classes">Class Schedule</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li><Link to="/goals">Goals</Link></li>
                <li><Link to="/camera">Camera</Link></li>
                <li><Link to="/recipe-book">Recipes</Link></li>
                <li><Link to="/connect">Connect</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;