import styled from "styled-components";

import { useState, useEffect } from "react";

export default function Box({ marker, disabled }) {
  return (
    <BoxStyled>
      {marker > 0 && <div className="marker">{marker}</div>}

      {disabled ? (
        <input disabled className="input-box" type="text" />
      ) : (
        <input className="input-box" type="text" />
      )}
    </BoxStyled>
  );
}

const BoxStyled = styled.div`
  input {
    outline: 1px solid black;
    padding: 5px;
    display: inline-block;
    width: 50px;
    height: 50px;

    &:disabled {
      background: black;
    }
  }

  .marker {
    padding-left: 3px;
    font-size: 12px;
    position: absolute;
  }
`;
