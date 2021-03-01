import React from 'react'
import styled from "styled-components"

const PopupDiv = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 350px;
  height: 100%;
  color: white;

  &:before{
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(40, 40, 40, 0.5);
  }
  .image-div{
    width: 500px;
    height: 500px;
    background-color: #aabbcc;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .image-div img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px rgba(20, 20, 20, 0.5);
    overflow: auto;
    object-fit: center;
  }
  .image-div .close-icon{
    color: white;
    background-color: rgba(40, 40, 40, 0.8);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: -25px;
    right: -25px;
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
  }

  @media screen and (max-width: 600px){
    .image-div{
      width: 350px;
      height: 350px;
    }
    .image-div .close-icon{
      width: 40px;
      height: 40px;
    }
    .image-div .close-icon{
      top: -20px;
      right: -20px;
    }
  }

  @media screen and (max-width: 400px){
    .image-div{
      width: 250px;
      height: 250px;
    }
    .image-div .close-icon{
      width: 30px;
      height: 30px;
    }
    .image-div .close-icon{
      top: -15px;
      right: -15px;
    }
  }
`
const Popup = (props) => {
  const closepopup = () => {
    props.close()
  }
  return (
    <PopupDiv id="popup">
      <div className="image-div">
        <span className="close-icon" onClick={closepopup}>&times;</span>
        <img src={props.src} alt="large icon" />
      </div>
    </PopupDiv>
  )
}

export default Popup
