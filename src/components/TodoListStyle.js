import styled from "styled-components"

export const TodoList = styled.div`
margin-top: -3rem;
display: flex;
flex-direction: column;
align-items: center;

h1{
  font-size:3rem;
  margin-bottom: 0.5rem;
  margin-top: -6rem;
  color: white;
  font-family: 'Dancing Script', cursive;
}

form{
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 768px){

}


`
export const AddTask = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
height: 6rem;
width: 23rem;

input{
  font-size: 1.3rem;
  color: #619D9B;
  margin-right: 0.5rem;
  border: 2px solid #619D9B;
  width: 15rem;
  height: 2.5rem;
}


button{
  color: white;
  background-color: #619D9B;
  border:none;
  height: 2.5rem;
  width: 3rem;
}

@media (max-width: 768px){
  width: 20rem;
 }
`

export const TaskList = styled.ul`
overflow: hidden;
display: flex;
justify-content:center ;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
box-shadow: 13px saddlebrown;
background-color: white;
border-radius: 5px;
width: 30rem;
margin-top: 2rem;
height: 21rem;
overflow-y:auto;

::-webkit-scrollbar{
  width:15px;
 }
 ::-webkit-scrollbar-track{
  background-color:white;
 }
 ::-webkit-scrollbar-thumb{
  background-color: #619D9B;
  box-shadow:0 0 5px rgba(0,0,0,1);
 }
 


 @media (max-width: 768px){
  width: 20rem;
  overflow-y:auto;
  ::-webkit-scrollbar{
  width:0;
 }

 }
`
export const Task = styled.li`
width: 25rem;
color: #619D9B;
border-radius: 5px;
border-bottom: 2px solid #619D9B ;
display:flex;
padding: 1rem;
justify-content:space-between;


@media (max-width: 768px){
  width: 17rem;
 }


button{
  color: #619D9B;
  width: 2rem;
  background-color: white;
  border: none;
}


`