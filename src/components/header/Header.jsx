import { Link } from "react-router-dom"
import MenuPopover from "../menuPopover/MenuPopover"
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md">
            <Link to="/" className="flex items-center gap-2 transition">
                <img src={logo} alt="Logo" className="h-8" />
                <h1 className="block text-lg font-bold text-stone-50 hover:opacity-80 transition-opacity">Odontologia</h1>
            </Link>

            <div className="flex items-center gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-stone-50"
                >
                    <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        clipRule="evenodd"
                    />
                </svg>
                <MenuPopover />
            </div>
        </header>
    )
}

export default Header
