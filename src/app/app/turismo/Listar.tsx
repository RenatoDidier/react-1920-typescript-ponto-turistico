import reactLogo from '@/assets/react.svg'
import Button from '@/components/ui/button/button'

export default function Listar() {
  return (
  <>
    <div className="d-flex align-items-center justify-content-between">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <Button text="Cadastrar um ponto turístico"/>
    </div>
    <h1>Turismo - Listar</h1>
  </>
  )
}
