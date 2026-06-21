
const Banner = () => {

    return (
        <div className=" bg-blue-200 min-h-screen">
            <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-around">
                <div>
                    <img
                        className="rounded-lg shadow-2xl max-w-xl mb-6 lg:mb-0"
                        src="https://i.ibb.co.com/bjrhL45K/lipstick-1-1.jpg" alt="banner image of lipstick" />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4 lg:mb-6">Look good, feel good</h1>
                    <p>Take this opportunity to enhance beauty with products that stand out in the market.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;