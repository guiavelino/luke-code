import React from 'react';
import Anima from '../../Components/Anima/';

import './styles.css';

import yoda from '../../assets/images/characters/yoda.png';
import separator from '../../assets/images/separator.svg';


const Home = () => {
    return (
        <>
            <Anima />

            <div className="section-1">
                <div className="container">
                    <header className="header">
                        <h2>Luke Code</h2>
                        <nav>
                            <button>
                                FAZER LOGIN
                            </button>
                            <button>
                                INSCREVA-SE
                            </button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre <br/> da programação!</h1>
                            <img src={separator} alt="" />
                            <p>
                                De o próximo passo para o seu futuro, <br />
                                que a força esteja com você.
                            </p>
                        </section>
                        <section>
                            <img src={yoda} alt="Yoda - Star Wars" />
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Home;