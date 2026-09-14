import Logo from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section>
            <div className="container mx-auto px-6 py-20 max-w-7xl">
                <div className="flex items-center justify-between">
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold leading-tight text-[#273248]">Build Your Ideal</h1>
                        <h1 className="text-5xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-5 max-w-md leading-7 text-gray-500">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>


                        <div className="mt-8 flex gap-4">
                            <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-600 px-5 py-3 text-sm font-medium text-white">
                                Explore Technologies
                            </button>
                            <button className="rounded-md border border-gray-300 px-8 py-3 text-sm text-gray-600">
                                Learn More
                            </button>

                        </div>
                    </div>

                    <div className="flex w-1/2 justify-center">
                        <img src={Logo} alt="Development Stack" className="w-[380px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;