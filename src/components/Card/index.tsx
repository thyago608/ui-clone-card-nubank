import {
  Container,
  CardFront,
  CardBack,
  NetworkIcon,
  MessageIcon,
  QuestionIcon
} from "./styles";
import nubankIcon from "../../assets/nu.png";

export function Card() {
  return (
    <Container>
      <CardFront className="face front">
        <header>
          <h1 className="title">mastercard</h1>
        </header>
        <div className="chip-container">
          <NetworkIcon />
        </div>

        <div className="username-container">
          <img src={nubankIcon} alt="" />
          <h2>Thyago R N Ribeiro</h2>
        </div>
      </CardFront>
      <CardBack className="face back">
        <div className="header">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div className="white-bar"></div>

        <div className="body">
          <div className="logo-info">
            <h3>platinum</h3>
            <div className="logo-platium"></div>
          </div>

          <div className="body-info">
            <div className="body-info-column1">
              <div className="div-column1">
                <MessageIcon />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>

              <div className="div-column1">
                <QuestionIcon />
                <p>
                  Lorem ipsum dolor sit <span>amet consectetur</span>.
                </p>
              </div>
            </div>
            <div className="body-info-column2">
              <p>
                Lorem ipsum dolor sit <span>amet consectetur</span>.
              </p>
              <p>
                Lorem ipsum dolor sit <span>amet consectetur</span>.
              </p>
            </div>
          </div>

          <div className="user-info-container">
            <label>5032 9334 3764 9846</label>
            <div className="dates">
              <p>
                date
                <span>02/20</span>
              </p>
              <p>
                data
                <span>02/28</span>
              </p>
              <p>
                ccv
                <span>123</span>
              </p>
            </div>
            <div className="cirus">cirus</div>
          </div>
        </div>
      </CardBack>
    </Container>
  );
}
