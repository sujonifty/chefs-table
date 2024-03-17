import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="w-full lg:w-11/12 mx-auto lexend">
            <section>
                <nav>
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div  tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Home</a></li>
                                    <li><a>Recipes</a></li>
                                    <li><a>About</a></li>
                                    <li><a>Search</a></li>
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl">TasteCraft</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <div className=" navbar-end  justify-end gap-2 hidden lg:flex ">
                        
                            <label className=" bg-gray-100 input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                <input type="text" className="grow" placeholder="Search" />

                            </label>
                            <a className=" p-3 rounded-full bg-green-400"><CgProfile /></a>
                        </div>
                        <a className="ml-20 md:hidden lg:hidden p-3 rounded-full bg-green-400"><CgProfile /></a>
                    </div>
                </nav>
            </section>
            <section className="bg-img rounded-3xl my-10">  
                <div className="hero min-h-screen " >
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                    <div className="hero-content  lg:text-center text-neutral-content">
                        <div className=" lg:w-2/3 mx-auto ">
                            <h1 className="lg:mb-5 text-[1.22rem]  lg:text-5xl font-extrabold ">Embark on a journey with our <span className="hidden lg:inline">personalized</span> cooking experiences!</h1>
                            <p className="lg:m-8 my-3  font-medium">We offer delicious food made with fresh ingredients and friendly service. Come taste our flavorful dishes and enjoy a cozy atmosphere. We look forward to serving you soon!</p>
                            <div className="space-y-7">
                            <button className="btn rounded-3xl bg-green-400">Explore Now</button> <button className="btn lg:ml-10 rounded-3xl text-white btn-ghost border-2 border-gray-300">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;