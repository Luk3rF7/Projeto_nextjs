import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo="Usando componente">
        <Cabecalho  titulo="next.js & React "/>
        <Cabecalho  titulo="Aprenda next na pratica"/>
        <div>
            <p>
            Você pode inserir qualquer expressão JavaScript válida dentro das chaves em JSX. Por exemplo, 2 + 2, user.firstName, ou formatName(user) são todas expressões JavaScript válidas.
             No exemplo abaixo, incorporamos o resultado da chamada de uma função JavaScript, formatName(user), dentro de um elemento 
            </p>
        </div>
        </Layout>
    )
}