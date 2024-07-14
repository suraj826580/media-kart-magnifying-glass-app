import React from "react";
import MagnifyingGlass from "./MagnifyingGlass";
import styled from "styled-components";

const PageContent = styled.div`
  padding: 20px;
  height: 2000px;
`;

function App() {
  return (
    <div>
      <PageContent>
        <h1>Welcome to Magnifying Glass Demo</h1>
        <p>Scroll down and move your mouse to see the effect!</p>
        {/* Add more content here */}
      </PageContent>
      <MagnifyingGlass />
    </div>
  );
}

export default App;
