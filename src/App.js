import { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "./components/Box";
import { markerPos, disabledPos } from "./components/BoxProps";

function App() {
  // Initiate an empty array of boxes
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    // Create a new arr
    const newArr = [];

    for (let i = 0; i < 169; i++) {
      // Define a property of each box
      const box = {
        count: i,
        marker: 0,
        disabled: false,
      };

      // Push box intu new array
      newArr.push(box);
    }

    // newArr at the index of number will be asigned a marker or disabled props
    markerPos.map((number, i) => {
      newArr[number].marker = i + 1;
    });

    disabledPos.map((pos, i) => {
      newArr[pos].disabled = true;
    });

    // Set array into the state
    setBoxes(newArr);
  }, []);

  return (
    <StyledApp>
      <div className="container">
        <header>
          <h1>Snake Board</h1>
          <p>Umma Ahimsha</p>
        </header>

        <div className="boxs-container">
          {boxes.map((box, index) => (
            <Box {...box} key={index} />
          ))}
        </div>
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  background: #ededed;

  .container {
    max-width: 1000px;
    padding: 2rem;
    margin: 0 auto;
    text-align: center;
  }

  .boxs-container {
    margin: 0 auto;
    width: 650px;
    display: flex;
    flex-wrap: wrap;
  }

  header {
    padding: 2rem 0;
  }
`;

export default App;
