export function enterText(text) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'TEXT_ENTERED',
    payload: text
  };
}