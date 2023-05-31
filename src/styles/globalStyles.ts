import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

:root{
  //primary colors
  --primary-color: #009ee0;


  //gray scale
  --gray-color-0:#fff;
  --gray-color-1:#9C95A0;
  --gray-color-2:#29262C;
  --gray-color-3:#131213;
  --gray-color-new: #FBFAFA;
  --gray-color-light: #F6F5F6;

  --black: #000000;
  
  //feedback palette
  --sucess-color:#48AD18;
  --negative-color:#FA5640;

  --background: rgba(29, 29, 42, 1);

  --box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
}

* {

    ul {
      padding: 0;
    }

::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-track{
    background: var(--gray-color-1);
    margin: 1rem;
    border-radius: 1.6rem;
}

::-webkit-scrollbar-thumb{
    background: white;
    border-radius: 1.6rem;
}

::-webkit-scrollbar-thumb:hover{
    background: var(--primary-focus-color);
}
}

`