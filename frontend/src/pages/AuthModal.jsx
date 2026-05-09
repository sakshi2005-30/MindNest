import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
const AuthModal = ({ type, onClose, setAuthType }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const {signup,user,signin}=useAuthStore();
  console.log("user:",user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (type === "login") {
     await signin(form);
     onClose()
     
    } else {
      console.log("Signup:", form);
     await signup(form);
      onClose();
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      {/* Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          {type === "login" ? "Welcome Back" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {type === "signup" && (
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          <button className="bg-black text-white py-2 rounded-lg">
            {type === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch */}
        <p className="text-sm text-center mt-4">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            type="button"
            onClick={() => setAuthType(type === "login" ? "signup" : "login")}
            className="ml-2 text-blue-500"
          >
            {type === "login" ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
