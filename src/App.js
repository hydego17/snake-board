import { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "./components/Box";

function App() {
  // Initiate an empty array of boxes
  const [boxes, setBoxes] = useState([]);

  // Black property for each box in array
  const black = [];

  // Marker props for each box in the array
  // based on index of boxes
  const marker = [0, 3, 5, 8, 10, 12, 18, 28, 30];

  useEffect(() => {
    // Create a new arr
    const newArr = [];

    for (let i = 0; i < 169; i++) {
      // Define a property of each box
      const box = {
        count: i,
        marker: 0,
      };

      // Push box intu new array
      newArr.push(box);
    }
    // newArr at the index of number will be asigner a new marker props
    marker.map((number, i) => {
      newArr[number].marker = i + 1;
    });

    // Set array into the state
    setBoxes(newArr);
  }, []);

  return (
    <StyledApp>
      <div className="container">
        <h1>Snake Board</h1>

        <div className="boxs-container">
          {boxes.map((box, index) => (
            <Box mark={box.marker} key={index} />
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

  h1 {
    padding: 2rem 0;
  }
`;

export default App;
