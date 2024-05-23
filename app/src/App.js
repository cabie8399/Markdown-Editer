import React from 'react';
import styled from 'styled-components';

// 自訂義左側container
const LeftDiv = styled.div.attrs({
  className: 'left-pannel col-3',
})`
  color: red;
  background: #262626;
  min-height: 100vh;
`;

// 自訂義右側container
const RightDiv = styled.div.attrs({
  className: 'right-pannel col-9',
})`
  color: blue;
  background: #333333;
`;

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <LeftDiv>左側</LeftDiv>
        <RightDiv>右側</RightDiv>
      </div>
    </div>
  );
}

export default App;
