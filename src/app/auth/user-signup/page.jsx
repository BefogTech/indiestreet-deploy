"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

import Cookies from 'js-cookie';
import { useRegisterUserMutation } from "@/redux/slices/authSlice";

const UserRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  useEffect(() => {
    setErrors({});
  }, [fullName, email, phoneNumber, password, confirmPassword]);

  const validate = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = "Full Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const userData = { fullname:fullName, email, phoneNumber, password };
      const response = await registerUser(userData).unwrap();
      console.log(response);
      toast.success(response.message);
      Cookies.set('token', response.token,{expires:7});
    } catch (err) {
      console.log(err);
      toast.error(err.data.message || "Registration failed");
    }
  };

  return (
    <div className="w-full h-[39rem] frm flex justify-center items-center px-6">
      <div className="form p-8 rounded-md bg-white 2xl:w-[500px] xl:w-1/3 lg:w-2/5 md:w-3/5 sm:w-2/3 w-full shadow-[0_0_40px_rgba(78,27,97,0.15)] border border-[#4e1b6112]">
        <h1 className="text-3xl font-semibold text-[#4E1B61] mb-0.5">
          Create an account
        </h1>
        <p className="mb-3">Register on Indiestreet.</p>
        <form className="mb-5" onSubmit={handleSubmit}>
          <div className="element mb-3">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className={`outline-none mt-0.5 rounded `}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>
          <div className="element mb-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className={`outline-none mt-0.5 rounded `}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="element mb-3">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className={`outline-none mt-0.5 rounded `}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <p className="text-xs text-red-500">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="element mb-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className={`outline-none mt-0.5`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="element mb-3">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`outline-none mt-0.5`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="element mb-3">
            <Button
              type="submit"
              className="w-full py-3.5"
              variant="default"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Register"}
            </Button>
          </div>
        </form>
        <div className="add-account text-sm">
          <p className="mb-1">
            Already have an account?{" "}
            <Link href="/auth" className="text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserRegister;
