
import { useReducer, useEffect } from "react";

function Button({ positions, initalAlignment, setAlignment, initalEmail, initalPass, isLogin }) {
const reducerFunction = (state, action) => {
    if (action.type === "CHECK_MAIL_PASS_BOX") {
    return action.payload.initalEmail === "" || action.payload.initalPass === "";
    } else {
    return state;
    }
};

const [value, dispatcher] = useReducer(reducerFunction, [initalEmail, initalPass]);

useEffect(() => {
    dispatcher({
    type: "CHECK_MAIL_PASS_BOX",
    payload: {
        initalEmail,
        initalPass,
    },
    });
}, [initalEmail, initalPass]);

const handleMouseEnter = () => {
    if (value) {
    setAlignment((prev) => (prev + 1) % positions.length);
    }
};

const handleClick = async () => {
if (!value) {
    try {
    const response = await fetch(`http://localhost:8080/api/loginpage/${encodeURIComponent(initalEmail)}`, {
        method: "GET",
        headers: {
        "Accept": "application/json",
        },
    });

    if (response.ok) {
        const data = await response.json();

        if (data.password !== initalPass) {
        alert("Incorrect password!");
        return;
        }

        alert("Login Successful!");
    } else if (response.status === 404) {
        alert("User not found");
    } else {
        alert("Login failed with status " + response.status);
    }
    } catch (error) {
    console.error("Login failed:", error);
    alert("Something went wrong while logging in.");
    }
}
};

return (
    <div
    className="button-container"
    style={{ display: "flex", justifyContent: positions[initalAlignment] }}
    >
    <button {...(value ? { onMouseEnter: handleMouseEnter } : { onClick: handleClick })}>
        {isLogin ? "Log In" : "Create Account"}
    </button>
    </div>
);
}

export default Button;



