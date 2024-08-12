import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Dummy Name",
        email: "dummy@gmail.com",
    }
})

// to debug react developer tools (Chrome)
UserContext.displayName = "UserContext";

export default UserContext;