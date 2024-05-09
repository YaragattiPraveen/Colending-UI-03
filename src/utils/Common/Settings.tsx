import { useState } from "react";
import Profile from "./Profile";
import Update_Profile from "./Update_Profile";
import Button from "../Form-utils/Button";

const Settings = () => {
  const [active, setActive] = useState("tab1");
  const details = [
    { label: "User Name", value: "--" },
    { label: "Name", value: "--" },
    { label: "Registered office address", value: "--" },
    { label: "City", value: "--" },
    { label: "State", value: "--" },
    { label: "Contact Number", value: "--" },
    { label: "Email Address", value: "--" },
    { label: "Website", value: "--" },
    { label: "Corporate Indetification Number", value: "--" },
    { label: "License Key", value: "--" },
  ];

  return (
    <main className="flex-col px-4 overflow-y-auto">
      <h3 className="text-primary font-semibold lg:text-2xl pb-3">Settings</h3>

      <div className="bg-bgColor py-10 px-10 rounded-lg mb-6">
        <div className="flex items-center justify-between my-2 md:my-5 max-w-[380px] mx-auto">
          <span
            onClick={() => setActive("tab1")}
            className={`${active === "tab1" ? "border-b-2 border-primary" : ""}`}>
            <Button callBack={() => true} title="Personal Information" />
          </span>
          <span
            onClick={() => setActive("tab2")}
            className={`${active === "tab2" ? "border-b-2 border-primary" : ""}`}>
            <Button callBack={() => true} title="Profile Update" />
          </span>
        </div>

        {active === "tab1" ? (
          <Profile details={details} />
        ) : (
          <Update_Profile />
        )}
      </div>
    </main>
  );
};

export default Settings;
