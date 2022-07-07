import React from 'react';
import '../styles/contacto.scss';

const Contacto = () => {
  return (
    <section id="contacto" className="Contacto">
      <h2>Contacto</h2>
      <form>
        <div className="item1">
          <input type="text" required name="name" />
          <label>
            Nombre<span>*</span>
          </label>
        </div>

        <div className="item2">
          <input type="text" required name="apellido" />
          <label>
            Apellido<span>*</span>
          </label>
        </div>

        <div className="item3">
          <input type="email" required name="email" />
          <label>
            Email<span>*</span>
          </label>
        </div>

        <div className="item4">
          <input type="text" required name="businessName" />
          <label>Nombre empresa</label>
        </div>

        <div className="item5">
          <textarea
            spellCheck="true"
            required
            name="mensaje"
            cols="30"
            rows="10"
          ></textarea>
          <label>
            Mensaje<span>*</span>
          </label>
        </div>
        <div className="item6">
          <button>Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default Contacto;
