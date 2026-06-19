
const Link = ({ route }) => {
    return (
        <li className="mr-10 px-1 hover:bg-blue-500">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;