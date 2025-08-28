// src/pages/login/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8090/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const token = await response.text(); 
                localStorage.setItem('token', token);
                navigate('/admin');
            } else {
                setError('Credenciales inválidas');
            }
        } catch (error) {
            setError('Error de conexión');
        }
    };


    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login Administrador</h2>
                {error && <div className="error">{error}</div>}
                <input
                    type="text"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    required
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default Login;