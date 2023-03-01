 export default function handler(req, res) {
    if(req.method === "GET")
        handleGet(req, res)
 }else{
    res.status(405).send()
 }

 function handlerGet(req, res) {
    res.status(200).json({
        id: 3,
        nome:'DEv',
        email: 'Client@Dev.com.br'})


}