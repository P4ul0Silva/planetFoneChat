import logo from "../../assets/planetchat-background.png"
import { Wrapper } from "./styles"
import { TfiYoutube, TfiFacebook, TfiTwitter } from 'react-icons/tfi'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/Global/GlobalContext"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { IHandleForm } from "../../contexts/Global/GlobalContext"
import { Form } from "../../components/form"

export const HomePage = () => {

    const { handleLogin } = useContext(GlobalContext);

    const onErrors = (errors: any)  => console.log(errors);

    const loginForm = yup.object().shape({
        email: yup.string().email("email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo Obrigatório")
    });

    const {register, handleSubmit, formState: {errors}} = useForm<IHandleForm>({
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
}