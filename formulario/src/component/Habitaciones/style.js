import styled from 'styled-components'

const Div=styled.div`
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 300px;
  height: auto;
  justify-content: space-between;
`;

const Input=styled.input`
  width: 100%;
  height: 30px;
`;

  const Label=styled.label`
    font-family: sans-serif;
    font-weight: bold;
    color: #fff;
  `;

const Habitacion=styled.div`
  width: 50px;
  height: auto;
`;

const Adul=styled.div`
  width: 50px;
  height: auto;
`;
const Nino=styled.div`
  width: 50px;
  height: auto;
`;

export {Div, Input, Label, Habitacion, Adul, Nino};
