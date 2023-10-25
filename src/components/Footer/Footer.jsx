import React from 'react';
import './Footer.scss'
import img1 from "./../../../public/img/icons/vk.svg"
import img2 from "./../../../public/img/icons/gitHub.svg"
import img3 from "./../../../public/img/icons/tg.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/lil_svyat" target="_blank" rel="noopener noreferrer"><img src={img1} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://github.com/c0ruscat1ng" target="_blank" rel="noopener noreferrer"><img src={img2} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://t.me/Svyatvinzavod" target="_blank" rel="noopener noreferrer"><img src={img3} alt="Link"/></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;