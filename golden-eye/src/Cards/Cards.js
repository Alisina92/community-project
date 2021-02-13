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
      <Red className="col-6 md-col-3 ">
        <p>Learning Material and HTML, CSS, JS and other programming languages</p>
      </Red>
      <Orange className="col-6 md-col-3">
        <p>Join our Slack community of Coder</p>
      </Orange>
      <Yellow className=" col-6 md-col-3">
        <p>Project that our community of coders have worked on</p>
      </Yellow>
      <Blue className="col-6 md-col-3">
        <p>Contact detail of the Organization</p>
      </Blue>
    </CardHeight>
  );
};

export default Cards;