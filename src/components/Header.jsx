import { CgProfile } from "react-icons/cg";
const Header = () => {
    return (
        <div>
            <section>
                <nav>
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Home</a></li>
                                    <li><a>Recipes</a></li>
                                    <li><a>About</a></li>
                                    <li><a>Search</a></li>
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl">Recipe Calories</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <div className=" navbar-end  justify-center gap-2 hidden lg:flex ">
                            <label className=" input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                                <input type="text" className="grow" placeholder="Search" />

                            </label>
                            <a className=" p-3 rounded-full bg-green-400"><CgProfile /></a>
                        </div>
                        <a className="ml-28 md:hidden lg:hidden p-3 rounded-full bg-green-400"><CgProfile /></a>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Header;