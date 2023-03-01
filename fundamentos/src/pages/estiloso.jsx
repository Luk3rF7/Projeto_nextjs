import styles from '../styles/Estiloso.module.css';
import Layout from '../components/Layout';
import Link from 'next/Link';

export default function Estiloso(){
    return (
        <Layout className="Exemplo de css modularizado">

        <div className={styles.roxo}> 
            <h1>Estilos usando css modulos</h1>
        </div>
        </Layout>
    )
}