import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center m-5">
                <button onClick={handleGoogleSignIn} className="btn btn-square px-10 btn-warning">
                    Google  
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;