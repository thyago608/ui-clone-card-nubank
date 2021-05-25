import styled from "styled-components";

export const Container = styled.main`
  width: 508px;
  height: 314px;

  background: #8e44ad;
  border-radius: 1.5rem;

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);

  position: relative;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: 1s;
`;

export const CardFront = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const CardBack = styled.section`
  position: absolute;
`;
