
const Cuerpo = ({onChangeCuerpo, n}) => {

    const despParrafo = `p${n}`;

    return (
        <div className="panel-editor-campos" id={n}>
            <label htmlFor={despParrafo}>Párrafo {n} :</label>
            <textarea 
                className="campo-form campo-textarea campo-form-with-100"
                type="text"
                id={despParrafo}
                name={despParrafo}
                placeholder="Escriba un párrafo de la noticia..."
                onChange={onChangeCuerpo}
            />
        </div>
    );
}

export default Cuerpo;