export default function decorate(block) {
    // do some cool logic in here
  }

  import { loadCSS, loadScript } from "../../scripts/aem.js";

export default function decorate(block) {
  // load the prism assets
  loadScript("/blocks/syntax/prism.js");
  loadCSS("/blocks/syntax/prism.css");
}


import { loadCSS, loadScript } from "../../scripts/aem.js";

const decorateSyntaxLanguage = (block) => {
  // add 2nd class to the code element if its not `block`
  const syntaxLang = block.classList[1];
  if (syntaxLang !== "block") {
    block
      .getElementsByTagName("code")[0]
      .classList.add(`language-${syntaxLang}`);
  }
};

export default function decorate(block) {
  // load the prism assets
  loadScript("/blocks/syntax/prism.js");
  loadCSS("/blocks/syntax/prism.css");

  // decorate each syntax block
  decorateSyntaxLanguage(block);
}
