import Cuerpo from './Cuerpo';

const CuerpoNoticia = ({onChangeCuerpo, nCuerpo}) => {

    const numbers = [];

    for (let index = 0; index < nCuerpo; index++) {
        numbers[index] = index + 1;
    }

    return (
        <div id="contenedorCampos">
            {numbers.map((n) => (
                <Cuerpo
                    onChangeCuerpo={onChangeCuerpo}
                    n={n}
                />
            ))}
        </div>
    );
}

export default CuerpoNoticia;