import React, { useState } from "react";
import Field from "./Field";
import Cookies from "js-cookie";

interface Props {
  setToken: any;
  token: string;
}
function Login({ token, setToken }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const add = (event: React.FormEvent) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch("http://127.0.0.1:8000/devices/devices/", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .then((response) => {
        setToken(response);
      });
  };
  //sets stores JWT token as cookies
  Cookies.set("token", token, { expires: 7, secure: true });
  console.log(token);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex w-screen justify-center">
        <div className="mx-auto' absolute h-screen w-1/4">
          <h1 className="pb-10 pt-10 text-center text-3xl font-extrabold text-[#00008B]">
            Angaza Technology Literacy Center
          </h1>
          <form className="mx-auto w-full max-w-sm" onSubmit={add}>
            <div className="flex flex-col pt-10">
              <Field text="Email" setValue={setEmail} />
              <label
                htmlFor="password"
                className="font-extrabold text-[#00008B]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="rounded-md border-none pr-48"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-2"
                  onClick={toggleShowPassword}
                >
                  {" "}
                  {showPassword ? (
                    <i className="fas fa-eye-slash fa-2x"></i>
                  ) : (
                    <i className="fas fa-eye fa-2x"></i>
                  )}{" "}
                </button>
              </div>
              <button
                type="submit"
                className="duration-600 mt-5 h-8 rounded-full bg-blue-500 text-lg font-medium leading-4 text-white transition ease-in hover:scale-105 hover:bg-sky-700"
                onClick={add}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <img
        alt="a"
        className="h-screen w-screen"
        src="https://cdn.discordapp.com/attachments/1249232893268590684/1254204922782814310/better_better.png?ex=66905fdb&is=668f0e5b&hm=8710dc5025653c1800e362dac25dbe043baacfbfe9f00e3dbc08782e23872049&"
      />
    </>
  );
}
export default Login;
