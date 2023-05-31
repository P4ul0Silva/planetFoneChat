import { useContext } from "react";
import * as yup from 'yup'
import { IHandleForm, UserContext } from "../../contexts/Users/UserContext"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {IoMdReturnLeft} from 'react-icons/io';

export const Form = () => {
    
    const { handleLogin, handleRegister, form, setForm } = useContext(UserContext);

    const onErrors = (errors: any)  => console.log(errors);

    function handleSubmitType(data: IHandleForm) {
        if(form) {
            handleLogin(data);
        } else {
            handleRegister(data);
            setForm(!form);
        }
        
    }

    const loginForm = yup.object().shape({
        email: yup.string().email("email inválido").required("Campo Obrigatório"),
        password: yup.string().required("Campo Obrigatório")
    });

    const registerForm = yup.object().shape({
        firstName: yup.string().required("Campo Obrigatório"),
        lastName: yup.string().required("Campo Obrigatório"),
        email: yup.string().email("email inválido").required("Campo Obrigatório"),
        password: yup.string().required("Campo Obrigatório"),
        confirmPassword: yup.string().required("Campo Obrigatório").oneOf([yup.ref('password')], "As senhas devem ser iguais")
    });

    const {register, handleSubmit, formState: {errors}} = useForm<IHandleForm>({
        resolver: yupResolver(form ? loginForm : registerForm)
    })

    return (
        <div className="box">
            <form onSubmit={handleSubmit(handleSubmitType, onErrors)}>
                {!form && (
                    <>
                    <label htmlFor="firstName">Nome</label>
                    <input {...register('firstName')} type="text" id="firstName" placeholder="Digite seu nome" tabIndex={1}/>
                    <span>{errors.firstName?.message}</span>
                    </>
                )}
                {!form && (
                    <>
                    <label htmlFor="lastName">Sobrenome</label>
                    <input {...register('lastName')} type="text" id="lastName" placeholder="Digite seu sobrenome" tabIndex={2}/>
                    <span>{errors.lastName?.message}</span>
                    </>
                )}
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" id="email" placeholder="Digite seu email" tabIndex={form ? 1 : 3}/>
                <span>{errors.email?.message}</span>
                <label htmlFor="password">Senha</label>
                <input {...register('password')} type="password" id="password" placeholder="Digite sua senha" autoComplete="true" tabIndex={form ? 2 : 4}/>
                <span>{errors.password?.message}</span>
                {!form && (
                <>
                <label htmlFor="re-password">Senha</label>    
                <input {...register('confirmPassword')} type="password" id="re-password" placeholder="Digite sua senha novamente" autoComplete="true" tabIndex={5}/>
                <span>{errors.confirmPassword?.message}</span>
                </>
                )}
                <div className="btnLogin">
                <button tabIndex={form ? 3 : 6} type="submit">{`${form ? 'Login' : "Registrar"}`}</button>
                </div>
            </form>
                <section className="notRegistered">
                    {form ? 
                    <a onClick={(e) => { e.preventDefault(); setForm(!form)}} tabIndex={4}>Ainda não tem cadastro?</a>
                    :<IoMdReturnLeft onClick={() => setForm(!form)} style={{width: "11rem", height: "30px"}}/>
                }
                </section>
        </div>
    )
}