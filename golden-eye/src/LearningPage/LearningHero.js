import React from 'react';
import styled from 'styled-components';
import Learning from'../images/learning.jpg'
import data from'./links'

const LearningHero=()=>{
  const LearningImage = styled.img`
    width:100%;
`;
    return(<div>
          <LearningImage src={Learning} alt='learning'/>
           <div>
             {data.map(link=>{
                  return (
                    <ul key={link.id}>
                      <li>{link.webName} </li>
                      <li>
                        <a href={link.URL}>{link.URL}</a>
                      </li>
                    </ul>
                  );
             })}  
           </div>
    </div>)
}

export default LearningHero;