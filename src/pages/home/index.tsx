import { Wrapper } from "./styles"
import logo from "../../assets/planetchat-background.png"
import { TfiYoutube, TfiFacebook, TfiTwitter } from 'react-icons/tfi'

export const HomePage = () => {
    return (
        <Wrapper>
            <div className="container">
                <section className="welcomeSection">
                    <div className="imageDiv">
                        <img src={logo} alt="" />
                        <div className="description">
                        <h2>Conecte-se com a comunidade!</h2>
                        <p>Bate papo simples e rápido</p>
                    </div>
                    </div>
                    
                </section>
                <section className="loginSection">
                    <div className="box">
                        <form action="">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Digite seu email"/>
                            <label htmlFor="pass">Senha</label>
                            <input type="text" name="pass" placeholder="Digite sua senha"/>
                            <div className="btnLogin">
                                <button type="button">Login</button>
                            </div>
                        </form>
                            <section className="notRegistered">
                                <a href="#">Ainda não tem cadastro?</a>
                            </section>
                    </div>
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
}