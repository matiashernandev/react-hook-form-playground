import { useForm } from "react-hook-form"

export default function App() {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      {/* nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input type="text" {...register("nombre")} />

      {/* correo */}
      <label htmlFor="correo">Correo</label>
      <input type="email" {...register("correo")} />

      {/* password */}
      <label htmlFor="password">Password</label>
      <input type="email" {...register("password")} />

      {/* confirmar password */}
      <label htmlFor="password">Confirmar password</label>
      <input type="password" {...register("confirmarPassword")} />

      {/* fecha de nacimiento */}
      <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
      <input type="date" {...register("fechaNacimiento")} />

      {/* pais */}
      <label htmlFor="pais">País</label>
      <select {...register("pais")}>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {/* file */}
      <label htmlFor="foto">Foto de perfil</label>
      <input type="file" {...register("foto")} />

      {/* terminos */}
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input type="checkbox" {...register("terminos")} />

      <button>Enviar</button>
    </form>
  )
}
