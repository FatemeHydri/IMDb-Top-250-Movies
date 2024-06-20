import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./style.css";

export default function SignIn() {
    return (
        <PrimaryLayout>
            <div className="container">
                <div className="login-box">
                 <form>  
                    <div className="login-header">
                        <h2>Sign in</h2>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" placeholder="UserName" required></input>
                        <UserOutlined style={{position: "absolute", left: "300px", top: "14px"}}/>
                    </div>
                    <div className="input-box">
                        <input type="password" className="input-field" placeholder="PassWord" required></input>
                        <LockOutlined style={{position: "absolute", left: "300px", top: "14px"}}/>
                    </div>
                    <div className="remember-forgot">
                        <div className="remember-me">
                            <input type="checkbox" />
                             <span className="remember">Remember me</span>
                        </div>
                        
                            <a href="#">Forgot Password ?</a>
                    </div>
                    <div className="input-box">
                        <button className="input-submit">Sign in</button>
                    </div>
                    <div className="register">
                        <span>Don't have an account?</span>
                        <a href="#">Register</a>
                    </div>
                    </form>
                </div>
            </div>
        </PrimaryLayout>
    )
}