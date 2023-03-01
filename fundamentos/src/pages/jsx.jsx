import Layout from "../components/Layout"

export default function Jsx() {
    return (
        <Layout titulo="entedendo o Jsx">
            <div  style={({
                    justifyContent: "center",
                    alignItems: "center",
                })}>
                <h1 style={({
                       display:"flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                })}>Jsx e um conceito central</h1>
                <p 
              style={({
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "50px",
                backgroundColor: "lightgray",
                color:"black",
                height: "30vh",
                fontSize: "25px",
              })}
                >
                    É chamada JSX e é uma extensão de sintaxe para JavaScript. Recomendamos usar JSX com o React para descrever como a UI deveria parecer.
                    JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.
                    JSX produz “elementos” do React. Nós iremos explorar a renderização para o DOM na próxima seção.
                    Abaixo você descobrirá o básico de JSX necessário para começar
                </p>
            </div>
            <div className="subtitle">
                <h1
                style={({
                    display:"flex",
                   justifyContent: "center",
                   alignItems: "center",
                   textAlign: "center",
                   marginBottom: "30px",
             })}
                >Por que JSX? </h1>
                <p
                    style={({
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        marginBottom: "50px",
                        backgroundColor: "lightgray",
                        color:"black",
                        height: "40vh",
                        width: "auto",
                        fontSize: "23px",
                      })}
                >
                    O React adota o fato de que a lógica de renderização é inerentemente acoplada com outras lógicas de UI:<br></br>
                    como eventos são manipulados,
                    como o state muda com o tempo e como os dados são preparados para exibição.<br></br>
                    Ao invés de separar tecnologias artificialmente colocando markup e lógica em arquivos separados,<br></br>
                    o React separa conceitos com unidades pouco acopladas chamadas “componentes” que contém ambos. <br></br>
                    Voltaremos aos componentes em outra seção. Mas, se você ainda não está confortável em usar markup em JS,<br></br>
                     esta palestra pode convencer você do contrário.<br></br>
                    O React não requer o uso do JSX. Porém, a maioria das pessoas acha prático como uma ajuda visual quando se está trabalhando com uma UI dentro do código em JavaScript.<br></br>
                     Ele permite ao React mostrar mensagens mais úteis de erro e aviso.
                    Com isso fora do caminho, vamos começar!

                </p>
            </div>
        </Layout>
    )
}