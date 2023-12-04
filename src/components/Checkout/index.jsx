import React, { useState } from 'react';
import db from '../../../db/firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { usarCart } from '../../context/Cart';

const Checkout = () => {


    const [inputNombre, setInputNombre] = useState("");
    const [inputApellido, setInputApellido] = useState("");
    const [inputTelefono, setInputTelefono] = useState("");
    const [inputMail1, setInputMail1] = useState("");
    const [inputMail2, setInputMail2] = useState("");
    const[orderId, setOrderId]= useState('')

    const handleInputNombre = (e) => {
      setInputNombre(e.target.value);
    };
    const handleInputApellido = (e) => {
        setInputApellido(e.target.value);
    };
    const handleInputTelefono = (e) => {
        setInputTelefono(e.target.value);
    };
    const handleInputMail1 = (e) => {
        setInputMail1(e.target.value);
    };
    const handleInputMail2 = (e) => {
        setInputMail2(e.target.value);
    };

    const {cart, totalPrecio, limpiarCarrito} = usarCart()
    const fecha = new Date()
    
    const handleSubmit = async( e) => {
        e.preventDefault();
        let item = {
            usuario:{
                nombre: inputNombre,
                apeliido: inputApellido,
                telefono: inputTelefono,
                mail: inputMail1,
            },
            producto:cart,
            total:totalPrecio(),
            fecha: fecha
        };
        const ventas = collection(db,"orders")
       const data =  await addDoc(ventas, item);
       setOrderId(data.id)
       limpiarCarrito()
    };
  
    return (
    <>
    {
      orderId ? <h2>Muchas gracias por su compra! Su numero de orden es: {orderId}</h2>
      : <form onSubmit={ handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese su Nombre"
        onChange={handleInputNombre}
        value={inputNombre}
      />
      <br />
      <input
        type="text"
        placeholder="Ingrese su Apellido"
        onChange={handleInputApellido}
        value={inputApellido}
      />
      <br />
      <input
        type="text"
        placeholder="Ingrese su Telefono"
        onChange={handleInputTelefono}
        value={inputTelefono}
      />
      <br />
      <input
        type="text"
        placeholder="Ingrese su mail"
        onChange={handleInputMail1}
        value={inputMail1}
      />
      <br />
      <input
        type="text"
        placeholder="Re ingrese su mail"
        onChange={handleInputMail2}
        value={inputMail2}
      />
      <br />
      <button disabled={inputMail1 !== inputMail2} type='submit'>COMPRAR</button>
    </form>
    }
    </>
    );
};

export default Checkout;