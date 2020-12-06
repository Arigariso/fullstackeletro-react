import { Switch, Route } from 'react-router-dom';

import home from '../Pages/home'
import produtos from '../Pages/produtos'
import pedidos from '../Pages/pedidos'
import lojas from '../Pages/lojas'
import contatos from '../Pages/contatos'


function Rotas () {
    return (
        <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/home" component={home} />
            <Route exact path="/produtos" component={produtos} />
            <Route exact path="/pedidos" component={pedidos} />
            <Route exact path="/lojas" component={lojas} />
            <Route exact path="/contatos" component={contatos} />
        </Switch>
    );
}

export default Rotas;

