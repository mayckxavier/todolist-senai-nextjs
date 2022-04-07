import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="input-tarefa" className="form-label"></label>
        <input type="text" className="form-control" id="input-tarefa" placeholder="Digite sua tarefa" />
        <button type="submit" className="btn btn-primary mt-3">Adicionar Tarefa</button>
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Default checkbox
              </label>
          </div>
        </li>
      </ul>
    </div>
  )
}
