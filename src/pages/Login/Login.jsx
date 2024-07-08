import {useNavigate } from "react-router-dom"
import Input from "../../shared/Input"
import Button from "../../shared/button/Button"
import { useState } from "react"

const Login = () => {
  const goTo = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(true)

  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function submit(e) {
    e.preventDefault()

    setLoading(false)
    if (email === "" || password === "") {
      alert("Please fill in all fields")
    } else if (!email.includes("@") || !email.includes(".com")) {
      alert("Invalid email address")
    } else {
      goTo("/profile")
    }
    setInterval(() => {
      setLoading(true)
    }, 3000)
  }
  return (
    <div className="flex w-full h-screen justify-center items-center ">
      <form
        onSubmit={submit}
        className="w-[50%]  rounded-[1rem] shadow-xl p-5 space-y-5  "
      >
        <Input
          type="text"
          value={email}
          onChange={handleEmail}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="password"
        />

        <Button text={loading ? "Submit" : "Loading..."} />
        {/* disable={!email || !password}  */}
      </form>
    </div>
  )
}

export default Login
