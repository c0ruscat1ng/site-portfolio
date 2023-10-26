import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Привет, меня зовут <em>Никита Морозов</em></strong><br/>
                    Я фронтенд-разрабочик с хорошим коммерческим опытом.
                </h1>
                <div className="header__text">
                    <p>Я постоянно развиваюсь и никогда не стою на месте</p>
                </div>
                <a href="https://drive.google.com/file/d/1X8UHF2E--2Zrj75m0y1-XoJGZ8Bq77jF/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">Загрузить CV</a>
            </div>
        </header>
    );
};

export default Header;