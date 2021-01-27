import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createTokenRequest } from "~/store/modules/card/actions";
import { Container } from "./styles";

import Card from "~/components/Card";

export default function Cards({}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createTokenRequest());
  }, []);
  return (
    <Container>
      <Card />
    </Container>
  );
}
