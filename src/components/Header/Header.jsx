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
                <a href="https://drive.google.com/drive/folders/1bP3mbYU6sD3ylNEJwlSHgZrIprTlryJE?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">Загрузить CV</a>
            </div>
        </header>
    );
};

export default Header;