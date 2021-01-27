import React from "react";
import CreditCardType from "credit-card-type";
import getCreditCardFlag from "~/services/getCreditCardFlag";
import { Container, Chip, Number, Name, ExpireDate, Flag } from "./styles";

import visa from "~/assets/visa.png";
import mastercard from "~/assets/mastercard.png";
import amex from "~/assets/amex.png";

export default function Card({
  number = "371449635398431",
  name = "Fernando S Almeida",
  expireDate = "12/28",
}) {
  let newNumber = "";
  let cardFlag = CreditCardType(number)[0].type.toUpperCase().replace("-", "");
  let flagImage = null;

  if (cardFlag === "AMERICANEXPRESS") cardFlag = "AMEX";

  for (let i = 0; i < number.length; i++) {
    if (i === 4 || i === 8 || i === 12) newNumber += " ";

    newNumber += number[i];
  }

  const dimensions = { width: 0, height: 0 };

  if (cardFlag === "VISA") {
    flagImage = visa;
    dimensions.width = 59;
    dimensions.height = 19;
  } else if (cardFlag === "MASTERCARD") {
    flagImage = mastercard;
    dimensions.width = 59;
    dimensions.height = 37;
  } else if (cardFlag === "AMEX") {
    flagImage = amex;
    dimensions.width = 40;
    dimensions.height = 36;
  }

  return (
    <Container>
      <Chip />
      <Number>{newNumber}</Number>
      <Name>{name.toUpperCase()}</Name>
      <ExpireDate>{expireDate}</ExpireDate>

      <Flag source={flagImage} dimensions={dimensions} />
    </Container>
  );
}
