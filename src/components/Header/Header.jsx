import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to={'/'}>О проекте</Link>
            <Link to={'/funds'}>Инвестиционные фонды и компании </Link>
            <Link to={'/projects'}>Инвестиционные проекты</Link>
            <Link to={'/exhibition'}>Выставка</Link>
        </header>
    );
}

export default Header;
