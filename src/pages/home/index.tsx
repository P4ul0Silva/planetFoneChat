import logo from "../../assets/planetchat-background.png"
import { Wrapper } from "./styles"
import { TfiYoutube, TfiFacebook, TfiTwitter } from 'react-icons/tfi'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/Global/GlobalContext"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { IHandleLogin } from "../../contexts/Global/GlobalContext"

export const HomePage = () => {

    const { handleLogin } = useContext(GlobalContext);

    const onErrors = (errors: any)  => console.log(errors);

    const loginForm = yup.object().shape({
        email: yup.string().email("email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo Obrigatório")
    });

    const {register, handleSubmit, formState: {errors}} = useForm<IHandleLogin>({
        resolver: yupResolver(loginForm)
    })

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
                        <form onSubmit={handleSubmit(handleLogin, onErrors)}>
                            <label htmlFor="email">Email</label>
                            <input {...register('email')} type="email" id="email" placeholder="Digite seu email"/>
                            <span>{errors.email?.message}</span>
                            <label htmlFor="password">Senha</label>
                            <input {...register('password')} type="password" id="password" placeholder="Digite sua senha"/>
                            <span>{errors.password?.message}</span>
                            <div className="btnLogin">
                            <button type="submit">Login</button>
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