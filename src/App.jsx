import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  console.log(errors)

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      {/* nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        {...register("nombre", {
          required: {
            value: true,
            message: "Nombre es requerido",
          },
          minLength: {
            value: 2,
            message: "Nombre debe tener más de 1 caracter",
          },
          maxLength: 10,
        })}
      />
      {errors.nombre && <span>{errors.nombre.message}</span>}

      {/* correo */}
      <label htmlFor="correo">Correo</label>
      <input
        type="email"
        {...register("correo", {
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Correo no válido",
          },
        })}
      />
      {errors.correo && <span>{errors.correo.message}</span>}

      {/* password */}
      <label htmlFor="password">Password</label>
      <input type="password" {...register("password")} />

      {/* confirmar password */}
      <label htmlFor="password">Confirmar password</label>
      <input
        type="password"
        {...register("confirmarPassword", {
          validate: (value) =>
            value === watch("password") || "Los passwords no coinciden",
        })}
      />
      {errors.confirmarPassword && (
        <span>{errors.confirmarPassword.message}</span>
      )}

      {/* fecha de nacimiento */}
      <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
      <input
        type="date"
        {...register("fechaNacimiento", {
          validate: (value) => {
            const fechaDeNacimiento = new Date(value)
            const fechaActual = new Date()
            const edad =
              fechaActual.getFullYear() - fechaDeNacimiento.getFullYear()

            return edad >= 18 || "Debes ser mayor de edad"
          },
        })}
      />
      {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}

      {/* pais */}
      <label htmlFor="pais">País</label>
      <select {...register("pais")}>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>
      {watch("pais") === "ar" && (
        <input
          type="text"
          placeholder="Ingresa tu provincia"
          {...register("provincia")}
        />
      )}

      {/* file */}
      <label htmlFor="foto">Foto de perfil</label>
      <input type="file" {...register("foto")} />

      {/* terminos */}
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input type="checkbox" {...register("terminos")} />

      <button>Enviar</button>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}
