import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
`;
const SideImage = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
  @media (max-width: 700px) {
    img {
      height: 250px;
      margin-top: 120px;
    }
  }
`;
const SideButtons = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;
const ContentButtons = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: column;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: flex-end;
  }
  h1 {
    width: 100%;
    color: rgb(126, 217, 87);
    font-size: 30px;
    text-align: center;
  }
  button,
  .download {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height: 40px;
    border: 1px solid white;
    padding: 15px;
    color: white;
    border-radius: 8px;
    margin: 20px 5% 0px 0px;
    @media (max-width: 700px) {
      display: none;
    }
  }
  button:hover,
  .download:hover {
    background-color: white;
    color: black;
  }
  .download {
    position: absolute;
    left: 10px;
    top: 10px;
    margin: 0;
    display: flex;
  }

  .icon {
    opacity: 0;
  }
  @media (max-width: 700px) {
    .icon {
      width: 60px;
      height: 60px;
      padding: 10px;
      color: white;
      opacity: 1;
    }
  }
`;
const ContentLink = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rancho", cursive;
  span {
    height: 100%;
    font-size: 4rem;
    width: 40%;
    display: flex;
    align-items: center;
    color: white;
  }
  img {
    width: 30%;
    height: 50%;
  }
  @media (max-width: 700px) {
    span {
      font-size: 2rem;
    }
    img {
      display: none;
    }
  }
`;
const MenuMobile = styled.nav`
  display:flex;
  width: 200px;
  flex-direction: column;
  position:absolute;
  right:0;
  top:10px;
  
  a{
    border:1px solid black;
    font-size:1.2rem;
    padding:10px;
    border-radius:8px;
    background-color: rgb(126, 217, 87);
    text-align:center;
  }
  p{
    font-size: 1.2rem;
    text-align:end;
    padding: 10px;  
    color:rgb(126, 217, 87);
  }
`
export {Container, SideImage, SideButtons, ContentButtons, ContentLink, MenuMobile}