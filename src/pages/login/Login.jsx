import './Login.css'
import { createStore } from 'state-pool';
import { Navigate, useNavigate, Redirect, Link } from 'react-router-dom';
import { ReactSession } from 'react-client-session';

const axios = require('axios');

const store = createStore();
store.setState("token", "");
ReactSession.setStoreType("localStorage");


export default function Login() {
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        const username = event.target.exampleInputEmail1.value;
        const password = event.target.exampleInputPassword1.value;
        let payload = {
            "username": username,
            "password": password
        }
        let res = axios.post('http://localhost:8765/login', payload, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Max-Age": "1800",
                "Access-Control-Allow-Headers": "content-type",
                "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS"
            }
        }).then(function (response) {

            
            //store.setState("token", response.data.token);
            console.log(response.data.token);
            ReactSession.set("token", response.data.token);

            //console.log("token:" + store.getState("token").getValue());
            //console.log(response);
            if (response.status === 200) {
                navigate('/dashboard');
            }
        }).catch(function(error){
            alert('Invalid Credentials');
        });
    }
    return (

        <div className='Login'>
            <form onSubmit={handleLogin} className='Form'>
                <div className="mb-3">

                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder='Email ID'
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Password'
                    />
                </div>
                <div className='RememberMe'>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" >
                            Check me out
                        </label>
                    </div>
                    <a href="/register" className="link-primary">New User</a>
                </div>
                <button type="submit" className="btn btn-primary" >
                    Submit
                </button>
            </form>
        </div>
    );
}

