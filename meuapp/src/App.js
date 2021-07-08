import './App.css';

// Mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000, mostre uma mensagem: "Você está gastando muito"

const luana = {
  cliente: "Luana",
  idade:27,
  compras: [
    {nome: "Notebook", preço: "R$ 2500"},
    {nome: "Geladeira", preço: "R$ 3000"},
    {nome: "Smarthphone", preço: "R$ 1500"}
  ],
  ativa: true
};

const mario = {
  cliente: "Mário",
  idade:31,
  compras: [
    {nome: "Notebook", preço: "R$ 2500"},
    {nome: "Geladeira", preço: "R$ 3000"},
    {nome: "Smarthphone", preço: "R$ 1500"},
    {nome: "Guitarra", preço: "R$ 3500"}
  ],
  ativa: false
};


const App = () => {
  const dados = luana; //Mude o valor manuealmente (mario ou luana)

  const total = dados.compras.map(item => +item.preço.replace("R$ ", "")).reduce((a,b) => a +b);
  console.log(total)
  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: 
        <span style={{ color: dados.ativa ? "green" : "red"}}>
           {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total gasto: R${total}</p>
      {total > 10000 && <p>Você está gastando muito!</p>}
    </div>
  );
};

export default App;