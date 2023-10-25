import './Contacts.scss'

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Расположение</h2>
                        <p>Ярославль, Россия, <br/>Готов к переезду в город Санкт-петербург</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">WhatsApp / Telegram</h2>
                        <p><a href="tel:+79201199544"> +7 (920) 119-95-44 / @Svyatvinzavod</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:nikitamorozov0712@gmail.com">nikitamorozov0712@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
};

export default Contacts;