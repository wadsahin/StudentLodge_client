
const Banner = () => {
    return (
        <div
            className="hero h-[480px]"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Eat Healthy, Stay Healthy</h1>
                    <p className="mb-5">
                        Eating a wide variety of healthy foods helps to keep you in good health and protects you against chronic disease. Eating a well-balanced diet means eating a variety of foods from each of the 5 food groups daily, in the recommended amounts. It is also important to choose a variety of foods from within each food group.
                    </p>
                    <div className="flex items-center justify-center gap-5">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;