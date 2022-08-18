import React,{useState, useEffect} from 'react'
import styled from 'styled-components';

function Site() {
const [toggle, setToggle] = useState(true)
const [advice, setAdvice] = useState({slip:{
  advice:"Don't judge a book by its cover",
  id: 1
}})
  useEffect(()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res=> res.json())
    .then(data => setAdvice(data))
  },[toggle])
  return (
    <Card>
        <p>ADVICE #{advice.slip.id}</p>
        <h3>{advice.slip.advice}</h3>
        
        <div>
        <img className='divider' src="./images/pattern-divider-desktop.svg" alt="" />
          <div onClick={()=> setToggle(!toggle)}>
          <img src="./images/icon-dice.svg" alt="" />
          </div>
        </div>
    </Card>
  )
}

const Card = styled.div`
  background:  hsl(217, 19%, 24%);;
  /* height: 250px; */
  min-height: 300px;
  position: relative;
  /* max-width: 400px; */
  width: 360px;
  border-radius: 10px;
  text-align: center;
  p{
    text-align:center;
    margin-top: 20px;
    font-size: .7rem;
    color: hsl(150, 100%, 66%);
}
h3{
  text-align: center;
  font-size: 1.3rem;
  color: hsl(193, 38%, 86%);
  padding: 0 4px;
}
img{
  width: 350px;
  padding: 0 16px;
}
div{
  width: 100%;
  margin: auto;
  position: absolute;
  bottom: -10px;
  left: 89px;
  @media screen and (max-width: 480px){
    width:55% ;
    display: flex;
    justify-content: center;
    align-items: center;
    
   
  }
  .divider{
    margin-bottom: 50px;
    margin-left: -178px;
    @media screen and (max-width: 480px){
      margin-left: -30px;
    }
  }
  div{
    background-color: hsl(150, 100%, 66%);
    width: 50px;
    height: 50px;
    margin-left: -18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 480px){
      margin-left: -25px;
    }
    &:hover{
        box-shadow: 0px 6px 112px 7px rgba(82,255,168,0.75);
        -webkit-box-shadow: 0px 6px 112px 7px rgba(82,255,168,0.75);
        -moz-box-shadow: 0px 6px 112px 7px rgba(82,255,168,0.75);
    }

  }

  
  
}
`

export default Site;