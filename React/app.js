import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<ul><li>1</li><li>2</li></ul>);
// var newParagraph = document.createElement("ul");
// newParagraph.innerHTML = "<li>List item 1</li><li>List item 2</li>";
// newParagraph.innerHTML += "<li>List item 3</li>";