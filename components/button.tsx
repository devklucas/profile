import styled from 'styled-components'
import Link from 'next/link'
const ButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height: 40px;
    border: 1px solid white;
    padding: 15px;
    color: white;
    border-radius: 8px;
    position: absolute;
    right: 10px;
    top:10px;
  :hover {
    background-color: white;
    color: black;
  } 
`

export const BtnBack = () => {
    return <Link href='/' ><ButtonStyled>Voltar</ButtonStyled></Link>
}
