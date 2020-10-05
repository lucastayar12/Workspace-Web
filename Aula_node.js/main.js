var frase;

carregaFrase = (callback) => {
  setTimeout( () => {
    frase = "Minha frase obstrutiva";
    callback();
  }, 3000);
};

imprimeFrase = () => {
  console.log(frase);
};

carregaFrase(imprimeFrase);

console.log("Olá");
