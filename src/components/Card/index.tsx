import { Container, CardFront, CardBack } from "./styles";
import nubankIcon from "../../assets/nubank.svg";

export function Card() {
  return (
    <Container>
      <CardFront>
        <header>
          <h1 className="title">mastercard</h1>
        </header>
      </CardFront>
      {/* <CardBack>
          <header></header>
      </CardBack> */}
    </Container>
  );
}
