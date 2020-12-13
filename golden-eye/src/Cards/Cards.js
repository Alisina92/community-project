import React from 'react';
import styled from 'styled-components';

const Cards =()=>{
    const Red = styled.div`
     background-color: red;
     `
     const Orange = styled.div`
       background-color: Orange;
     `;
    const Yellow = styled.div`
      background-color: yellow;
    `;
    const Blue = styled.div`
      background-color: #34e8eb;
  
    `;
    const CardHeight=styled.div`
      height:100px;
      
     `;
  return (
    <CardHeight className="row col-12  ">
      <Red className="col-6 md-col-3 ">red</Red>
      <Orange className="col-6 md-col-3">orenge</Orange>
      <Yellow className=" col-6 md-col-3">yellow</Yellow>
      <Blue className="col-6 md-col-3">Blue</Blue>
    </CardHeight>
  );
};

export default Cards;