import styled from "styled-components";

import { useState, useEffect } from "react";

export default function Box({ mark }) {
  return (
    <BoxStyled>
      {mark > 0 && <div className="marker">{mark}</div>}

      <input className="input-box" type="text" />
    </BoxStyled>
  );
}

const BoxStyled = styled.div`
  input {
    display: inline-block;
    width: 50px;
    height: 50px;
  }

  .marker {
    position: absolute;
  }
`;
