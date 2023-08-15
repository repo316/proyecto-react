import {useForm} from "react-hook-form";
import userSessionStore from "../../states/userSessionStore";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {
        setSession,
        isLoggedIn,
        getSession
    } = userSessionStore();

    const handleOnSubmit = (e) => {
        setSession(e);
        // window.location.assign('/dashboard');
        navigate('dashboard');
    }


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Inicio de sessión</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Por favor ingrese sus datos</h6>
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input {...register('email', {required: 'Email is required'})} type="email"
                                   className="form-control"
                                   id="email" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input {...register('password', {required: 'Password is required'})} type="password"
                                   className="form-control"
                                   id="password" placeholder="Password"/>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary mb-3">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Home;