import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";
import LoadingScreen from "../components/LoadingScreen";

const Login = () => {

  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [formData, setFormData] = useState({

    email: "",
    password: "",
  })

  const { email, password } = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData)
    dispatch(loginUser(formData))
      
  }


  useEffect(() => {
    if (isError) {
      toast.error(message || "Invalid Credentials", {
        position: "bottom-center",
        theme: "colored",
        autoClose: 2000
      });
    }


    if (user && isSuccess) {
      navigate("/")
    }
    if (isError && message) {
      toast.error(message, {
        position: "bottom-center",
        theme: "colored"
      })
    }
  }, [user, isError, message , isSuccess])

  if(isLoading) {
    return <LoadingScreen/>
}
  return (
    <>
      <section className="bg-blue-50 min-h-screen flex-grow">
        <div className="container m-auto max-w-lg py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            {/* <!-- Register Form--> */}
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Login Here
              </h2>

              {/* <!-- Email --> */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  onChange={handleChange}
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Email address"
                  required
                />
              </div>

              {/* <!-- Password --> */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  value={password}
                  type="password"
                  id="password"
                  name="password"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Password"
                  required
                />
              </div>

              {/* <!-- Submit Button --> */}
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-grow"></div>
      </section>
    </>
  );
};

export default Login;
