import styled from 'styled-components'

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: var(--background);
    color: #ffffff;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    gap: 1.5rem;
    padding: 0 5%;

    .mainHeader {
        display: flex;
        width: 100%;
        height: 60px;
        padding: 5% 0;
        -webkit-box-shadow: 0px 14px 17px -6px rgba(0,0,0,0.5); 
        box-shadow: 0px 14px 17px 10px rgba(0,0,0,0.1);

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .logoBox {
            display: flex;
            /* justify-content: center; */
            width: max-content;
            height: 100%;
            .logo {
            height: 100%;
        }

        }
        .logoutDiv {
            width: 250px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            svg {
                cursor: pointer;
            } & :hover {
            color: var(--primary-color);
            cursor: pointer;
            }
        }  
    }

    .searchRoom {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .mainContainer {
        height: 100%;
    }

    .messageContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50%;

        .chatBox {
            padding: 1% 5%;
            height: 65%;
            border: 1px inset gray;
            border-radius: 8px;
            border-top: none;
            border-bottom: none;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            overflow-x: hidden;
            gap: 1rem;

            .scrollArrow {
                cursor: pointer;
                position: sticky;
                bottom: 0px;
                align-self: center;
            }

            .message {
                h4 {
                    margin: 1px;
                }
                p {
                    margin-bottom: 0;
                }
                span {
                    font-size: 10px;
                    align-self: self-end;
                }
                min-width: 15%;
                display: flex;
                flex-direction: column;
                padding: 5px;
                position: relative;
                right: 0px;
                width: max-content;
                border-radius: 5px;
                background-color: rgba(255,255,255, .1);
            }

            .ownMessage {
                position: relative;
                right: 1px;
                align-self: flex-end;
                text-align: end;

                span {
                    align-self: flex-end;
                }
            }
        }

        .sendMessage {
            width: 100%;
            display: flex;
            justify-content: space-between;

            input {
                width: 90%;
                background: none;
                border: 1px solid gray;
                border-radius: 5px;
                color: #ffffff;
            }

            button {
                background: none;
                border: none;
                height: 30px;
                background-color: var(--primary-color);
                border-radius: 5px;
                color: #ffffff;
                font-weight: 700;
                cursor: pointer;
                transition: .2s ease-in-out;
            }& :disabled {
                color: rgba(255,255,255, .5);
                background: none;
                cursor: not-allowed;
            }
        }
    }

    aside {
        width: 100%;

        .usersList {
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            margin: 0;
            width: 100%;
            max-height: 300px;
            overflow: auto;
            gap: 1rem;

            .user {
                padding: 2% 2%;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 40%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                /* gap: 10px; */
                border: 1px solid transparent;
                border-radius: 6px;
                border-bottom: 1px inset gray;
                
            }
            .user:hover {
                border: 1px solid gray;
            }

            svg {
                color: var(--primary-color)
            }
        }
    }

    @media screen and (min-width: 600px) {

        padding: 0;

        .mainHeader {
            height: 60px;
            width: auto;
            margin-top: 10px;
            padding: 0 5% 10px 1rem;
        }

        .mainContainer {
            display: flex;
        }

        .messageContainer {
            margin: 0  5%;
            width: 100%;
            height: 75%;
            justify-content: space-between;
        }

        .sendMessage {
            input {
                height: 50px;
            }

            align-items: center;
        }

        aside {
            width: 28vw;
            height: 100%;

            .usersList {
                flex-wrap: unset;
                max-height: 100%;
                height: 100%;
                padding-left: 1rem;

                .user {
                    width: 90%;
                    overflow: unset;

                    img {
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }
    }
`