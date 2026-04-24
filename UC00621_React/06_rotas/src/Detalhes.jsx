import { useParams } from "react-router-dom";

function Detalhes() {
    const params = useParams();
    return (
        <>

            <h1>Detalhe: </h1>
            <p> user id: { params.userId } </p>

        </>
    );
}

export default Detalhes;