import React from 'react';
import styled from 'styled-components';

const App = () => {
  const GreenH1 = styled.h1`
    color: green;
  `;

  return (
    <div>
      <GreenH1>Hello World</GreenH1>
    </div>
  );
};

export default App;
