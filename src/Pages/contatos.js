import {useState} from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import '../components/contato/contato.css';
import '../components/contato/imagens/email.png';
import '../components/contato/imagens/whatsapp.png';
import '../components/Categorias';

export default function Contatos () {
    const [ form, setForm ] = useState({
        nome:"",
        msg:"",       
    });

    const controleMudanca = (evento) => {
        setForm({
            ...form, 
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => {
        
        const opcoes = {
            method: 'POST',
            headers: {'Content-type': 'application/json', 'Access-Control-Alow-Origin' :'*'}, 
            
        };

        const resposta = await fetch("http://localhost/fullstackeletro/php/api/cadastro_contato.php", opcoes);
        const dados = await resposta.json()
        
     };

     /* evento.preventDefault() = ele vai executar o submit mais nao
     vai atualizar novamente. Dessa forma é possivel controlar o pós clique*/

    return (
        <Row>
        <div className="formulario">

            <div className="col-lg-6 col-md-6 mx-auto">
            <Form onSubmit={controleEnvio}>
            <h4>Contato</h4>
            <Form.Group>
                <Form.Label>Nome:</Form.Label>
                <Form.Control onChange={controleMudanca} type="text" id="nome" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Mensagem</Form.Label>
                <Form.Control onChange={controleMudanca} type="text" id="msg" />
            </Form.Group>
            
            <Button onClick={(e) => e.preventDefault()} variant="primary" type="submit">
                Enviar
            </Button>  
            </Form>
                                  
            </div>
        </div>
    </Row>    
    );
}


     
