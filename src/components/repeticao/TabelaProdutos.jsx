import './TabelaProdutos.css'
import produtos from "../../data/produtos";

export default function TabelaProdutos() {

    function getLinhas() {
        return produtos.map((produto, index) => {
            return (
                <tr key={produto.id}
                className={index % 2 === 0 ? 'Par' : 'Impar'}>
                  <td> {produto.id} </td>
                  <td> {produto.nome} </td>
                  <td>R$ {produto.preco.toFixed(2).replace(".", ",")} </td>
                </tr>
            );
          });
    }


  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody> {getLinhas()} </tbody>
      </table>
    </div>
  );
}
