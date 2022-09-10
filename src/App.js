import React from 'react'
import TodoList from './components/TodoList'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    list-style: none;
  }
  body{
    background-color: #619D9B;
    display: flex;
    justify-content: center;
    padding-top: 10rem;
  }
`;

export default function App() {
  return (
    <>
    <GlobalStyle/>
    
   < TodoList/>

   </>
  )
}
