import React, { useRef, useState } from 'react'
import '../styles/contacto.scss'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Contacto = () => {
  const form = useRef(null)

  const [state, setState] = useState({
    submitting: false,
    success: false,
    error: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)

    setState({
      ...state,
      submitting: true
    })

    const response = await fetch('https://formspree.io/f/xayvgdze', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
    setState({
      ...state,
      submitting: false
    })

    if (response.ok) {
      setState({
        ...state,
        success: true
      })

      form.current.reset()
      setTimeout(() => {
        setState({
          ...state,
          success: false
        })
      }, 2000)
    } else {
      setState({
        ...state,
        error: true
      })
      form.current.reset()
    }
  }

  return (
    <section id="contacto" className="Contacto">
      <h2>Contacto</h2>
      {state.success && (
        <div className="MailSuccess">
          <p>
            Mail Enviado{' '}
            <span>
              {' '}
              <AiOutlineCheckCircle />{' '}
            </span>
          </p>
        </div>
      )}
      <form ref={form} onSubmit={handleSubmit}>
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
          <button
            className={`${state.submitting && 'btnLoading'}`}
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting && <div className="spinner"></div>}

            {!state.submitting && 'Enviar'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contacto
