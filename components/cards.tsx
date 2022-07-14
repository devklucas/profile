import styled from "styled-components";
import React from "react";

const FlipCard = styled.div`
  background-color: transparent;
  width: 18.75rem;
  height: 18.75rem;
  perspective: 1000px;
  @media (max-width: 1024px){
    width:100%;
    margin-bottom: 120px;
  }
`
const FlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateX(180deg);
  }
`;
const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 16px;
  img {
    width: 100%;
    margin-top: 1rem;
  }
  @media (max-width: 1024px){
    img{
      height: 400px ;
      width: 70%;
    }
  }
`;
const CardBack = styled.div`
  position: absolute;
  display:flex;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 16px;
  background-color:rgb(126,217,87);
  color: bisque;
  transform: rotateX(180deg);
  padding:15px;
  font-size: 1.2rem;
  img {
    width: 8.75rem;
    height: 8.75rem;
    margin-top: 1rem;
  }
  a {
    color: white;
  }
  @media (max-width: 1024px){
    img{
      height: 6rem;
      width:6rem;
    }
  }
`;

export default function Cards({work}) {
  
  
    return (
      <FlipCard key={work.id}>
        <FlipInner>
          <CardFront>
            <img src={work.img} alt={work.name} />
          </CardFront>
          <CardBack>
            <span>
              {work.description}. Teste a aplicação
              <a href={work.demo} target="_blank">
                {" "}
                AQUI
              </a>
              , ou veja o
              <a href={work.repositorio} target="_black">
                {" "}
                REPOSITORIO{" "}
              </a>
              do gitHub.
            </span>
          </CardBack>
        </FlipInner>
      </FlipCard>
    );
}
