import React from 'react';
import styled from 'styled-components';

// 左側元件
import SearchFile from './components/SearchFile';

// 自訂義左側container
const LeftDiv = styled.div.attrs({
  className: 'left-pannel col-2',
})`
  background: #262626;
  min-height: 100vh;
  padding: 20px;

`;

// 自訂義右側container
const RightDiv = styled.div.attrs({
  className: 'right-pannel col-10',
})`
  color: blue;
  background: #333333;
`;

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <LeftDiv>
          <SearchFile></SearchFile>
        </LeftDiv>
        <RightDiv>右側</RightDiv>
      </div>
    </div>
  );
}

export default App;
