import React, { useState } from "react";
import Cookies from "js-cookie";
import bg from "./better_better.png";

interface Props {
  backUrl: string;
}
function Login({ backUrl }: Props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(false);

  const add = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`${backUrl}/authen/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user,
          password: password,
        }),
      });
      const json = await response.json();
      Cookies.set("token", json.tokens.access_token, {
        expires: 7,
        secure: true,
      });
      window.location.reload();
    } catch (e) {
      setErrors(true);
      setPassword("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex w-screen justify-center">
        <div className="absolute mx-auto h-screen">
          <h1 className="pb-10 pt-10 text-center text-3xl font-extrabold text-[#00008B]">
            Angaza Technology Literacy Center
          </h1>
          <form className="mx-auto w-full max-w-sm" onSubmit={add}>
            <div className="flex flex-col pt-10">
              <label className="font-extrabold text-[#00008B]">Username</label>
              <div className="relative">
                <input
                  type="text"
                  className="rounded-md border-none pr-48"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                />
              </div>
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
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <button
                type="submit"
                className="duration-600 mt-5 h-8 rounded-full bg-blue-500 text-lg font-medium leading-4 text-white transition ease-in hover:scale-105 hover:bg-sky-700"
              >
                Sign In
              </button>
              {errors && (
                <p className="mt-1 text-sm text-red-500">
                  Invalid Username or Password
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <img alt="a" className="h-screen w-screen" src={bg} />
    </>
  );
}

export default Login;
