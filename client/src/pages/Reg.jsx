import React, { useState } from 'react';
import axios from 'axios'

export function Reg() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/forUnsa/email/', {
        'recipient': email,   // Utiliza el campo de correo electrónico para el destinatario
        'subject': 'Registro exitoso',  // Asunto del correo
        'message': `Hola ${name}, tu registro ha sido exitoso.`  // Mensaje personalizado
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* ... tu código existente ... */}
      <form method="POST" onSubmit={handleSubmit}>
        {/* ... tu código existente ... */}
        <label>Nickname: </label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Correo Institucional: </label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Registaaarar</button>
      </form>
    </div>
  );
}