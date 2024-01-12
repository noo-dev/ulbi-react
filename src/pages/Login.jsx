import MyButton from "../components/UI/button/MyButton"
import MyInput from "../components/UI/input/MyInput"

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <MyInput type="text" placeholder="Enter login" />
                <MyInput type="password" placeholder="Enter password" />
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}

export default Login