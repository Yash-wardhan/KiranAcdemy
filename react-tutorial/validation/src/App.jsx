import { useState } from "react"
import {ToastContainer, toast} from 'react-toastify'

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [errors, setErrors] = useState({})

  const handleInputForm = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    // If there are validation errors, set them in state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      toast(errors)
      return;
    }

    // If no errors, handle form submission logic here
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-8">
        <ToastContainer />
          <div className="flex items-center gap-6">
            <label htmlFor="name">UserName</label>
            <input type="text" placeholder="User Name" onChange={handleInputForm} name="username" value={formData.username} className="w-screen border-2 px-4 py-2" />
            {errors.username && <span className="text-red-500">{errors.username}</span>}
          </div>
          <div className="flex items-center gap-6">
            <label htmlFor="name">Password</label>
            <input type="password" placeholder="Password" onChange={handleInputForm} name="password" value={formData.password} className="w-screen border-2 px-4 py-2" />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          <button type="submit" className="px-3 py-4 border-2 hover:bg-blue-600 shadow-lg hover:text-white">Login</button>
        </form>
      </div>
    </div>
  )
}

export default App
