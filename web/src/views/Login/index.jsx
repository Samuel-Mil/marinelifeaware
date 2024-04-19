import "./login.css"

export default function Login(){
    return (
        <section className="login">
            <form>
                <h1>Efetuar Login</h1>
                <div className="input_box">
                    <label>Login:</label>
                    <input type="text" />
                </div>

                <div className="input_box">
                    <label>Senha:</label>
                    <input type="password" />
                </div>

                <div className="input_box">
                    <button type="submit">Login</button>
                </div>
            </form>
        </section>
    )
}