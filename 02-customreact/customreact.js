// Define a custom function named customRender that takes a React-like element (reactElement) and a container to render it in.
function customRender(reactElement, container) {
  /*
  // Create a new DOM element of the type specified in reactElement.type (e.g., 'a' for anchor).
  const domElement = document.createElement(reactElement.type);

  // Set the inner HTML content of the DOM element to the children of the reactElement.
  domElement.innerHTML = reactElement.children;

  // Set the 'href' attribute of the DOM element to the value specified in reactElement.props.href.
  domElement.setAttribute('href', reactElement.props.href);

  // Set the 'target' attribute of the DOM element to the value specified in reactElement.props.target.
  domElement.setAttribute('target', reactElement.props.target);

// Append the newly created DOM element to the provided container.
  container.appendChild(domElement);
  */

  // Create a new DOM element of the type specified in reactElement.type.
  const domElement = document.createElement(reactElement.type);
  // Set the inner HTML content of the DOM element to the children of the reactElement.
  domElement.innerHTML = reactElement.children;
  // Loop through each property in reactElement.props.
  for (const prop in reactElement.props) {
    // Check if the current property is 'children' (which can be ignored).
    if (prop === 'children') continue; // can be ignored
    // Set an attribute on the DOM element with the current property name and its value from reactElement.props.
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  // Append the newly created DOM element to the provided container.
  container.appendChild(domElement);
}

// Define a React-like element (reactElement) with a type 'a' (anchor) and props (attributes) for href and target.
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit google', // Inner content of the anchor element.
};

// Find the container element in the HTML with the id 'root' and store it in the mainContainer variable.
const mainContainer = document.querySelector('#root');

// Call the customRender function to render the reactElement within the mainContainer.
customRender(reactElement, mainContainer);
