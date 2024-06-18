import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer'
import peopleBig from '../assets/people-big.png'
import peopleBit from '../assets/people-bit.png'
import blurBlue from '../assets/blur-asset-blue.png'
import blurPink from '../assets/blur-asset-pink.png'

export default function Login() {
    const navigate = useNavigate();
    const { handleSubmit, control, formState } = useForm({
      mode: "onChange",
    });
    const { errors, isValid } = formState;

    const onSubmit = (data) => {
      console.log(data);
        const formData = new FormData();
        formData.append("document", data?.document);
        formData.append("numberDoc", data?.numberDoc);
        formData.append("numberPhone", data?.numberPhone);
        fetch(`https://rimac-front-end-challenge.netlify.app/api/user.json`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((response) => {
                console.log(response);
                localStorage.setItem("name", response?.name);
                localStorage.setItem("lastName", response?.lastName);
                localStorage.setItem("birthDay", response?.birthDay);
                localStorage.setItem("document", data?.document);
                localStorage.setItem("numberDoc", data?.numberDoc);
                localStorage.setItem("numberPhone", data?.numberPhone);
               navigate("/home");
          })
          .catch((error) => {
            console.log(error);
          });
      };


  return (
    <div className="p-relative">
        <div className="login ai-center d-flex fd-column">
            {/* <div className="d-flex jc-between w-100vw only-desk">
                <img src={blurPink} alt="blurPink"/>
                <img src={blurBlue} alt="blurBlue" />
            </div> */}
            <div className="background-images d-flex ai-center jc-center" >
              <div className="d-flex login-container jc-center ai-center">
                <img className="only-desk w-350" src={peopleBig} alt="peopleBig" />
                <div className="w-350">
                  <div className="d-flex container-title-mobile">
                      <div>
                          <span className="bg-gradient p-8 br-4 fw-700 fs-14">Seguro Salud Flexible</span> 
                          <p className="fw-700 fs-26" style={{marginTop: "10px", marginBottom: "0"}}>Creado para ti y tu familia</p>
                      </div>
                      <img className="only-mob" src={peopleBit} alt="peopleBit" />
                  </div>
                  <p className="fw-600 fs-14 mb-10">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="w-350">
                    <div className="d-flex input mb-10">
                      <Controller
                        name="document"
                        control={control}
                        defaultValue="DNI"
                        render={({ field }) => (
                          <select {...field}>
                            <option value="DNI">DNI</option>
                            <option value="CE">CE</option>
                            <option value="Pasaporte">Pasaporte</option>
                          </select>
                        )}
                      />
                      <div>
                        <label className="c-5E6488 fw-400 fs-12" htmlFor="numberDoc">Nro. de documento</label>
                        <Controller
                          name="numberDoc"
                          control={control}
                          rules={{
                            required: "Ingresa un número de documento válido",
                            minLength: {
                              value: 7,
                              message: "El número de documento debe tener al menos 7 caracteres"
                            },
                            maxLength: {
                              value: 9,
                              message: "El número de documento no puede tener más de 9 caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="number"
                              className="numberDoc fw-400 fs-16"
                              placeholder="Ingresa el número"
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="input mb-10">
                      <label className="c-5E6488 fw-400 fs-12" htmlFor="numberPhone">Celular</label>
                      <Controller
                        name="numberPhone"
                        control={control}
                        rules={{
                          required: "Ingresa un número de teléfono válido",
                          minLength: {
                            value: 9,
                            message: "El número de teléfono debe tener 9 caracteres"
                          },
                          maxLength: {
                            value: 9,
                            message: "El número de teléfono debe tener 9 caracteres"
                          }
                        }}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="number"
                            className="numberPhone fw-400 fs-16"
                            placeholder="Ingresa el número de celular"
                          />
                        )}
                      />
                    </div>
                    <div className="d-flex mb-10">
                      <input
                        name="user-feedback"
                        value="item spacing"
                        type="checkbox"
                        required
                      />
                      <label className="fw-400 fs-12">Acepto lo Política de Privacidad</label>
                    </div>
                    <div className="d-flex mb-10">
                      <input
                        name="user-feedback"
                        value="item spacing"
                        type="checkbox"
                        required
                      />
                      <label className="fw-400 fs-12">Acepto la Política Comunicaciones Comerciales</label>
                    </div>
                    <p className="mb-10">
                      <a href="#" className="fw-600 fs-12 c-03050F "> Aplican Términos y Condiciones.</a>
                    </p>
                    <button
                      type="submit"
                      value="Confirm"
                      className="login-button c-poniter"
                      disabled={!isValid}
                    >
                      <span className="fw-700 fs-20 c-FFFFFF">{formState.isSubmitting ? "Cargando..." : "Cotiza aquí"}</span>
                    </button>
                    {!isValid && (
                      <p className="error-message">Por favor, completa todos los campos correctamente.</p>
                    )}
                    {errors.numberDoc && <p className="error-message">{errors.numberDoc.message}</p>}
                      {errors.numberPhone && <p className="error-message">{errors.numberPhone.message}</p>}
                  </form>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
