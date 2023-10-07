function Alert ({color, msg}) {
    return(
        <>
            <div className={`alert alert-${color} mt-3`} role="alert">{msg}</div>
        </>
    );
}
export default Alert;