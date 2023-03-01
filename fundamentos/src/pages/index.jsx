import Navegador from "../components/Navegador"

export default function Inicio(){
    return (
        <>
        <div style={({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"gray",
            border:"2px 0px 0px 0px solid white",
            height: "10vh"
        })}>
        <h1> bem vindo a aplicaçoes com nextjs </h1> 
   </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height:'90vh',
            flexWrap:'wrap', 
            
        }}>
          
        <Navegador texto="Estiloso" destino="/estiloso" /> 
        <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/> 
        <Navegador texto="Jsx" destino="/jsx"  cor="crimson"/> 
        <Navegador texto="Navegação #01" destino="/navegacao/"  cor="green"/> 
        <Navegador texto="Navegação #02" destino="/client/sp-2/123"  cor="gray"/> 
        <Navegador texto="Componente com Estado" destino="/estado"  cor="fuchsia"/> 
        <Navegador texto="Integração com Api #01" destino="/integracao_1"  cor="#E7B10A"/> 
        <Navegador texto="Conteúdo Estático" destino="/estatico"  cor="#fa054a"/> 
           
        </div>
        </>
    )
}