import styled from "styled-components";

export const Container = styled.main`
  width: 508px;
  height: 314px;
  background-image: radial-gradient(
    circle at 31.39% 27.82%,
    #a700ca 0,
    #8a05be 50%,
    #6c09b1 100%
  );
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

  > header {
    text-align: right;
    margin-top: 4rem;
  }
  .title {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    position: relative;
    margin-right: 1rem;

    &::before,
    &::after {
      content: "";
      width: 3rem;
      height: 3rem;
      border-radius: 50%;

      position: absolute;
      top: -3.2rem;
      opacity: 0.8;
    }
    &::before {
      right: 2.5rem;
      background: #c0392b;

      z-index: 1;
    }

    &::after {
      right: 0.5rem;
      background: #f1c40f;
    }
  }
`;

export const CardBack = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
`;
