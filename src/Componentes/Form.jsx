import { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    DNI: ""
  });

  const [errors, setErrors] = useState("");
  const [showCard, setShowCard] = useState(false); 

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstNameRegex = /^\S.{2,}$/; 
    const lastNameRegex = /^.{6,}$/; 

    if (!firstNameRegex.test(formData.firstName) || !lastNameRegex.test(formData.DNI)) {
        setErrors("Por favor chequea que la información sea correcta");
    } else {
        setErrors("");
      setShowCard(true); 
    }
  };

  return (
    <div>
      <h1>Medico Online</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="DNI">DNI:</label>
          <input
            type="text"
            id="DNI"
            name="DNI"
            value={formData.DNI}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {errors && <p>{errors}</p>}
      {showCard && formData.firstName && formData.DNI && (
        <Card firstName={formData.firstName} DNI={formData.DNI} />
      )}
    </div>
  );
};


export default Form