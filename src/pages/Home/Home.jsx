import Header from "../../components/Header/Header.jsx";
import './Home.scss'

const Home = () => {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2"> Мой стэк</h2>
                            <p>HTML5, CSS3, SASS, JavaScript, React, TypeScript, Redux, RTK Query, BootStrap, MaterialUI,
                                TailwindCSS</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;