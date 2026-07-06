import Heading from "../Heading";

const Banner = () => {

    return (
        <div className=" bg-blue-200 p-5">
            <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-around">
                <div>
                    <img
                        className="rounded-lg shadow-2xl w-full max-w-xl mb-6 lg:mb-0"
                        src= "https://i.ibb.co.com/bjrhL45K/lipstick-1-1.jpg" alt="banner image of lipstick" />
                </div>
                <div>
                    <Heading
                        title="Look good, feel good"
                        subtitle="Take this opportunity to enhance beauty with products that stand out in the market."
                    ></Heading>
                </div>
            </div>
        </div>
    );
};

export default Banner;