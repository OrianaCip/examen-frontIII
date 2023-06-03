const Card = ({ firstName, DNI }) => {
    return (
      <div>
        <h2>Informacion del Paciente</h2>
        <p>Nombre: {firstName}</p>
        <p>DNI: {DNI}</p>
      </div>
    );
  };

  export default Card