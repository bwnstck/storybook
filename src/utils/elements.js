export const createElement = (tagName, props) => {
  //* Anlegendes Elements in Abhängigkeit von TagName
  const element = document.createElement(tagName);

  //* children wird extrahier, others werden zugewiesen
  const { children, ...other } = props;

  //* Restliche props werden assigned
  Object.assign(element, other);

  //* Children werden angehangen
  if (children) {
    element.append(...children);
  }

  return element;
};
