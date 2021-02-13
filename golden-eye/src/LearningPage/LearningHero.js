import React from 'react';
import styled from 'styled-components';
import Learning from'../images/learning.jpg'

const LearningHero=()=>{
  const LearningImage = styled.img`
    width:100%;
`;
    return(<div>
          <LearningImage src={Learning} alt='learning'/>
    </div>)
}

export default LearningHero;