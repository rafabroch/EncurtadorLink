import './error.css';
import { Link } from'react-router-dom';

export default function Error() {
    return (
        <div className='container-error'>
            <img src='logo192.png' alt="Logotipo React, Pagina não encontrada" />
            <h1> Pagina Não Encontrada! </h1>
            <Link to="/" >
                Voltar para Home
            </Link>
        </div>
    )
};