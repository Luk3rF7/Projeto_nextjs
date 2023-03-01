import Layout from "../components/Layout";
export async function getStaticProps(){
    return {
        props:{
            numero:Math.random()
        }
    }
}
export default function Estatico(props){
    return (
        <Layout titulo="Gerador de numero aleatorio Estatico">
            <div>{props.numero}</div>
        </Layout>
    )
}