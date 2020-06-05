import '../css/componentes.css'

export const saludar = (noum) => {
  console.log("nombre", noum);
  const h1 = document.createElement("h1");
  h1.innerText = `Hola, ${noum}`;
  document.body.append(h1);
};
