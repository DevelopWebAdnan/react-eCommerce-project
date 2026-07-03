
const Heading = ({ title, subtitle }) => {
    return (
        <div className="text-center lg:text-left">
            <h2 className="text-xl md:text-2xl lg:text-4xl mb-4 lg:mb-6">{title}</h2>
            <p className="text-xs md:text-base lg:text-xl text-gray-600">{subtitle}</p>
        </div>
    );
};

export default Heading;