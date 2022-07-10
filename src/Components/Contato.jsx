import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone} from '@fortawesome/free-solid-svg-icons'

export default function Contato(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col"><FontAwesomeIcon icon={faUser} className="me-2"/>{props.nome}</div>
      <div className="col"><FontAwesomeIcon icon={faPhone} className="me-2"/>{props.telefone}</div>
      <div className="col">
        <button
        className="btn btn-warning m-1"
        onClick={() => {props.remover(props.id);}}>Remover</button>
      </div>
      </div>
    </div>
  );
}
