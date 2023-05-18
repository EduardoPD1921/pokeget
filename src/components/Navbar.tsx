import { FiMenu } from 'react-icons/fi';
import { MdCatchingPokemon } from 'react-icons/md';

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 ml-0 sm:ml-5">
                <a className="btn btn-ghost normal-case text-xl">
                    <MdCatchingPokemon className="mr-1" />
                    PokeGet
                </a>
            </div>
            <div className="flex-none gap-2 mr-5 hidden sm:flex">
                <button className="btn btn-sm">Sign in</button>
                <button className="btn btn-sm btn-ghost">Sign up</button>
            </div>
            {/* mobile menu */}
            <div className="flex-1 justify-end sm:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                        <FiMenu />
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <button>Sign up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
