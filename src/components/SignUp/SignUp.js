import useAuth from "../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import initAuth from "../Firebase/firease.init";
import { useState } from "react";

initAuth();

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, pass);
    if (pass.length < 6) {
      setError("Password should be more then 6 character");
      return;
    }

    signupNewUser(email, pass);

    if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
      setError("Password must contain 2 uppercase");
      return;
    }
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  // email signup
  const signupNewUser = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setUserName();
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // google signin
  const { signInGoogle } = useAuth();
  const location = useLocation();
  console.log(location.state?.from);
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/65/b5/50/65b550b1ba6868fcf5013884321b076b.jpg')`,
        }}
      >
        <div className="flex justify-end">
          <div className="bg-gray-50 min-h-screen w-1/2 flex justify-center items-center">
            <div>
              <form onClick={handleSignup}>
                <div>
                  <span className="text-sm text-gray-900">Hello</span>
                  <h1 className="text-2xl font-bold">Sign up for an account</h1>
                </div>
                <div className="my-3">
                  <input
                    onBlur={handleNameChange}
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="my-3">
                  <input
                    onBlur={handleEmailChange}
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-5">
                  <input
                    onBlur={handlePassChange}
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="row mb-3 text-danger">{error}</div>

                <div className="">
                  <button
                    type="submit"
                    className="mt-4 mb-3 w-full bg-indigo-500 hover:bg-indigo-800 text-white py-2 rounded-md transition duration-100"
                  >
                    Sign up now
                  </button>
                  <button
                    onClick={handleGoogleLogin}
                    className="flex space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 lg:px-9 rounded-md transition duration-100"
                  >
                    <img
                      className=" h-5 cursor-pointer"
                      src="https://i.imgur.com/arC60SB.png"
                      alt=""
                    />
                    <h6>Or sign-in with google</h6>
                  </button>
                </div>
              </form>
              <p className="mt-8">
                Do you have an account?
                <NavLink to="/login">
                  <span className="cursor-pointer text-sm text-blue-600">
                    Login here
                  </span>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
