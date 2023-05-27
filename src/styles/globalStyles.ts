import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

:root{
  //primary colors
  --primary-color: #009ee0;
  --primary-focus-color: #009ee0;
  --primary-2-color: #3E1E51;
  --primary-2-focus-color: #BF90DC;
  --primary-3-color: #45205C;


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

  --box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
}

* {
    /* outline: 1px solid red; */
}

`