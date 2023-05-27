import styled from "styled-components";

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');
font-family: 'Roboto', sans-serif;


    display: flex;
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(29, 29, 42, 1);
    color: #ffffff;
    overflow: hidden;

    .container {
        display: flex;
        flex-direction: row;
        margin: 0 90px;
        overflow: hidden;
        .welcomeSection {
            display: flex;
            flex-direction: column;
            width: 50%;
            align-items: center;
            justify-content: space-evenly;

            .imageDiv {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;

                img {
                    object-fit: contain;
                    width: 80%;
                    height: 80%;
                }
            }
        }

        .loginSection {
                display: flex;
                width: 60%;
                align-items: center;
                justify-content: center;
                .box {
                    display: flex;
                    width: 100%;
                    height: 50%;
                    justify-content: space-around;

                    border-left: 1px solid var(--gray-color-1);
                    form {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        label {
                            margin: 5px 0;
                            margin: 10px 0;
                            color: var(--gray-color-1);
                        }

                        input {
                            margin: 5px auto;
                            background: none;
                            border: none;
                        }

                        .btnLogin {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 25px auto;
                            width: 100px;
                            height: 40px;
                            background-color: #009ee0;
                            border-radius: 5px;
                            button {
                                width: 100%;
                                height: 100%;
                                background: none;
                                border: none;
                                color: #ffffff;
                                font-weight: 700;
                                cursor: pointer;
                            } & :hover {
                            background-color: #007fb4;
                            border-radius: 5px;
                        }
                            
                        } 
                    }
                }

                .notRegistered {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    a {
                        color: #009ee0;
                        text-decoration: none;
                    }
                }

                @media screen and (max-width:650px) {

                .box {
                    flex-direction: column;
                    border: none;
                }
            }
            }

    }

    @media screen and (max-width:650px) { 

    .container {
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin: 0 auto;
    }

    .box {
        flex-direction: column;
        border: none;
    }
}

    footer {
        position: fixed;
        bottom: 0px;
        background: rgb(0,158,224);
        background: linear-gradient(298deg, rgba(0,158,224,1) 0%, rgba(6,160,225,1) 80%, rgba(95,198,237,1) 100%);
        width: 100%;
        height: 50px;
        color: white;
        text-align: center;
        span {
            font-size: 14px;
            position: relative;
            top: 30%;
            a {
                text-decoration: none;
                color: #ffffff;
            } & :hover {
                color: rgba(255,255,255, 0.8);
            }
        }

        .social {
            position: absolute;
            right: 0px;
            width: 25%;
            display: flex;
            justify-content: space-evenly;

            div {
                a {
                    color: #ffffff;
                } & :visited {
                    color: none;
                }
            } & :hover {
                color: rgba(255,255,255, 0.8)
            }
        }


        @media screen and (max-width:650px) { 

            
}
        }
`