import styled from "styled-components";
import { BiWifi, BiMessageSquareDots } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";

export const Container = styled.main`
  width: 508px;
  height: 314px;
  background-image: radial-gradient(
    circle at 31.39% 27.82%,
    #9c01ca 0,
    #8105be 50%,
    #6608b2 100%
  );
  border-radius: 1.5rem;

  position: relative;
  transform-style: preserve-3d;
  perspective: 500px;
  transition: 1s;

  &:hover {
    transform: rotateY(180deg);
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }

  .back {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.section`
  > header {
    text-align: right;
  }

  .title {
    font-size: 1.6rem;

    margin: 6rem 1.5rem 0 0;
    font-weight: 400;
    color: #fff;
    position: relative;

    &::before,
    &::after {
      content: "";
      width: 4rem;
      height: 4rem;
      border-radius: 50%;

      position: absolute;
      top: -40px;
      opacity: 0.95;
    }
    &::before {
      right: 25px;
      background: #c0392b;

      z-index: 1;
    }

    &::after {
      right: 2px;
      background: #f1c40f;
    }
  }

  .chip-container {
    position: relative;
    height: 4rem;
    margin: 1rem 0 7rem 3.5rem;

    > svg {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 0.5rem;
      left: 6rem;
      transform: rotate(90deg);
      color: white;
    }

    &::before {
      content: "";
      width: 5rem;
      height: 100%;
      border-radius: 0.8rem;
      position: absolute;
      top: 0;
      left: 0;
      background: #fad390;
      filter: brightness(1.1);
    }
  }

  .username-container {
    margin: 0 0 2rem 3.5rem;

    display: flex;
    align-items: center;

    img {
      width: 5rem;
      border-radius: 0.8rem;
    }

    h2 {
      color: white;
      font-size: 1.6rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-left: 1rem;
    }
  }
`;

export const NetworkIcon = styled(BiWifi)``;

export const MessageIcon = styled(BiMessageSquareDots)`
  width: 2rem;
  height: 2rem;
  color: white;
`;
export const QuestionIcon = styled(FaRegQuestionCircle)`
  width: 2rem;
  height: 2rem;
  color: white;
`;

export const CardBack = styled.section`
  .header {
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 0.9rem;
    position: relative;

    p {
      margin: 1rem;
    }
  }

  .white-bar {
    width: 100%;
    height: 5.5rem;
    background: #ced6e0;
  }

  .body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 10rem;
    margin: 2rem 0 0 1rem;

    .logo-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      > .logo-platium {
        width: 7rem;
        height: 5rem;
        background: #ced6e0;
        border-radius: 35%;
      }

      > h3 {
        font-size: 1.6rem;
        font-weight: 300;
        color: white;
      }
    }

    .body-info {
      flex: 3;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      color: white;
      font-weight: 300;

      .body-info-column1 {
        .div-column1 {
          display: flex;

          span {
            font-weight: bold;
          }

          svg {
            margin-right: 0.5rem;
          }
        }
      }
      .body-info-column2 {
      }
    }

    .user-info-container {
      width: 100%;
      margin: 4rem 0 0 2.5rem;
      position: relative;

      > .cirus {
        position: absolute;
        right: 45px;
        color: white;
        font-weight: 300;
      }

      > label {
        font-size: 1.6rem;
        color: white;
        letter-spacing: 1.5px;
      }

      > .dates {
        width: 40%;
        color: white;
        display: flex;
        justify-content: space-between;

        span {
          font-weight: bold;
          margin-left: 0.5rem;
        }
      }
      &::before,
      &::after {
        content: "";
        width: 4rem;
        height: 4rem;
        border-radius: 50%;

        position: absolute;
        top: 0;
        opacity: 0.95;
      }
      &::before {
        right: 50px;
        background: #3742fa;

        z-index: 1;
      }

      &::after {
        right: 25px;
        background: #1e90ff;
      }
    }
  }
`;
