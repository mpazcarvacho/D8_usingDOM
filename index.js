const body = document.getElementsByTagName("body");
const container = document.createElement("div");
body[0].className = "bg-light";

container.className = "container";

div_row = document.createElement("div");
div_row.className = "row";

container.appendChild(div_row);

body[0].insertBefore(container, body[0].firstChild);

const text_h2 = document.createTextNode("Checkout form");
const h2_1 = document.createElement("h2");
h2_1.appendChild(text_h2);

const img1 = document.createElement("img");
img1.className = "d-block mx-auto mb-4";
img1.height = "72";
img1.width = "72";
img1.alt = "";
img1.src = "image.jpg";

const text_p1 = document.createTextNode(
  "Below is an examble form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
);

const p1 = document.createElement("p");
p1.appendChild(text_p1);
p1.className = "lead";

const div1 = document.createElement("div");
div1.className = "py-5 text-center";
div1.appendChild(img1);
div1.appendChild(h2_1);
div1.appendChild(p1);

container.appendChild(div1);

const label1 = document.createElement("label");
label1.textContent = "First name";
label1.htmlFor = "firstName";

const input1 = document.createElement("input");
input1.placeholder = "";
input1.type = "text";
input1.className = "form-control";
input1.id = "firstName";
att = document.createAttribute("value");
input1.setAttributeNode(att);
att = document.createAttribute("required");
input1.setAttributeNode(att);

container.appendChild(input1);

// TODO separar en funciones
