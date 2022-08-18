import React from 'react';
import Site from "./components/Site";
import styled from 'styled-components';
function App() {
  return (
    <Container className='d-flex justify-content-center align-items-center container-fluid vh-100'>
      <Site/>
    </Container>
  );
}
const Container = styled.div`
  background:   hsl(218, 23%, 16%);
  
`
export default App;
