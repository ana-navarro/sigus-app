import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../../context/User';
import { Container } from 'react-bootstrap';

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login/', {
        email,
        password,
      });

      toast.dismiss();
      toast.success(response.data.message);
      localStorage.setItem('x-auth-token', response.data.data);
      setCurrentUser(response.data.user);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Container>
        <div className="card o-hidden border-3 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Bem-vindo de Volta!
                    </h1>
                  </div>
                  <form onSubmit={loginUser}>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        autoComplete="off"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Senha:</label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </div>
                    <div className="text-center pt-4">
                      <button
                        className="btn btn-primary btn-user btn-block"
                        type="submit"
                        disabled={!email || !password}
                      >
                        Entrar
                      </button>
                    </div>

                    <div className="text-center pt-4">
                      <a className="small" href="/password-reset">
                        Esqueceu a senha?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
