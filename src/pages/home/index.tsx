import logo from "../../assets/planetchat-background.png";
import { Wrapper } from "./styles";
import { TfiYoutube, TfiFacebook, TfiTwitter } from 'react-icons/tfi';
import { Form } from "../../components/form";
import { useContext, useEffect } from "react";
import { socket } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/Users/UserContext";



export const HomePage = () => {
    const { token } = useContext(UserContext);

    useEffect(() => {
        if(!token) {
            window.localStorage.clear();
        }
    }, []);

    return (
        <Wrapper>
            <div className="container">
                <section className="welcomeSection">
                    <div className="imageDiv">
                        <img src={logo} alt="logo" />
                        <div className="description">
                            <h2>Conecte-se com a comunidade!</h2>
                            <p>Bate papo simples e rápido</p>
                        </div>
                    </div>
                    
                </section>
                <section className="loginSection">
                    <Form/>
                </section>
            </div>
            <footer>
                <span>©2023 <a href="https://planetfone.com.br/home">PlanetFone</a></span>
                <div className="social">
                    <div className="youtube">
                        <a href="https://www.youtube.com/PlanetfoneBrasil"><TfiYoutube size={21}/></a>
                    </div>
                    <div className="facebook">
                        <a href="https://www.facebook.com/planetfonebrasil"><TfiFacebook size={21}/></a>
                    </div>
                    <div className="twitter">
                        <a href="https://twitter.com/Planetfonebr"><TfiTwitter size={21}/></a>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
};