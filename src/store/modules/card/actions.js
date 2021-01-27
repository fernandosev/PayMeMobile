export function createTokenRequest(
  name,
  cpf,
  paymentMethod,
  number,
  expirationDate,
  cvv
) {
  return {
    type: "@card/CREATE_TOKEN_REQUEST",
    payload: { name, cpf, paymentMethod, number, expirationDate, cvv },
  };
}

export function createTokenSuccess(cardTokendata) {
  return {
    type: "@card/CREATE_TOKEN_SUCCESS",
    payload: { cardToken },
  };
}

export function createTokenFailure() {
  return {
    type: "@card/CREATE_TOKEN_FAILURE",
  };
}
