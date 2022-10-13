import React, { useCallback, useRef } from "react";
import MaskedInput from "./MaskedInput";

const ContactForm = () => {
  const formRef = useRef();
  const submitForm = useCallback((e) => {
    e.preventDefault();
    const inputs = formRef.current.elements;
    const contacts = {
      name: inputs.name.value,
      phone: inputs.phone.value,
    };

    alert(`Nome: ${contacts.name}\nContacto: ${contacts.phone}`);
    formRef.current.reset();
  });

  return (
    <form className="contact-form" ref={formRef}>
      <MaskedInput name="name" label="Nome" required={true} />
      <MaskedInput
        name="phone"
        label="Contacto"
        required={true}
        mask="+({351}) #00 000 000"
        placeholder="+(351) 290 000 000"
      />
      <button type="submit" onClick={submitForm}>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
