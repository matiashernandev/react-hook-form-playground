export default function App() {
  return (
    <form>
      {/* nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input type="text" />

      {/* correo */}
      <label htmlFor="correo">Correo</label>
      <input type="email" />

      {/* password */}
      <label htmlFor="password">Password</label>
      <input type="email" />

      {/* confirmar password */}
      <label htmlFor="password">Confirmar password</label>
      <input type="email" />

      {/* fecha de nacimiento */}
      <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
      <input type="date" />

      {/* pais */}
      <label htmlFor="pais">País</label>
      <select name="" id="">
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {/* file */}
      <label htmlFor="file">File</label>
      <input type="file" />

      {/* terminos */}
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input type="checkbox" />

      <button>Enviar</button>
    </form>
  )
}
