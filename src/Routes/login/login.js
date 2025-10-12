import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const register = () => {
        localStorage.setItem("user", JSON.stringify({ email, password }));
        alert("Registered successfully!");
        navigate("/login");
    };

    const login = () => {
        const stored = localStorage.getItem("user");
        if (!stored) {
            alert("No user found!");
            return;
        }

        const user = JSON.parse(stored);
        if (user.email === email && user.password === password) {
            alert("Login successful!");
            navigate("/home");
        } else {
            alert("Invalid email or password!");
        }
    };

    return (
        <>
        <Navbar />
    
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="card-title text-center mb-4">Login / Register</h2>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="d-grid gap-2">
                    <button onClick={register} className="btn btn-primary">Register</button>
                    <button onClick={login} className="btn btn-success">Login</button>
                </div>
            </div>
        </div>
        </>
    );
}
