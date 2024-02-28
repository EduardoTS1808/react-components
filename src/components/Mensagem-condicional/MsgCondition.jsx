export default function MsgCondition (){
    let condicao = true;

    return (
        <>
             {condicao ? <p>Texto condicionalmente renderizado. componente separado</p> : null}
        </>
    )
}