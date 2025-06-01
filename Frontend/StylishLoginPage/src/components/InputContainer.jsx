
import { useState } from "react";
import Button from "./Button";
import HeaderName from "./HeaderName";

function InputContainer({ isLogin, positions, initalAlignment, setAlignment }){
const [initalEmail, setEmail] = useState("");
const [initalPass, setPass] = useState("");

return (
    <div className="input-container">
    <HeaderName isLogin={isLogin} />
    <input
        type="email"
        placeholder="Enter your mail id"
        value={initalEmail}
        onChange={(e) => setEmail(e.target.value)}
    />
    <input
        type="password"
        placeholder="Enter password"
        value={initalPass}
        onChange={(e) => setPass(e.target.value)}
    />
    <Button
        positions={positions}
        initalAlignment={initalAlignment}
        setAlignment={setAlignment}
        initalEmail={initalEmail}
        initalPass={initalPass}
        isLogin={isLogin}
    />
    </div>
);
}

export default InputContainer;
