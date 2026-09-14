const Navbar = () => {
    return (
        <nav className=" sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <div className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 text-xs text-white">
                        DS
                    </div>
                    <h2 className="font-semibold text-gray-800">
                        Dev Stack
                    </h2>
                </div>

                
            </div>
        </nav>
    );
};

export default Navbar;