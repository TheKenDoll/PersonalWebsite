import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

function Layout () {
    return (
        <>
            <div className="header">
                <div>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <Link to="/About">
                        <button>About</button>
                    </Link>
                    <Link to="/Project">
                        <button>Project</button>
                    </Link>
                    <Link to="/Learning">
                        <button>Learn</button>
                    </Link>
                    <Link to="/Contact">
                        <button>Contact</button>
                    </Link>
                </div>
            </div>

            <div className="body">
                <Outlet />
            </div>

        </>
    )
}

export default Layout