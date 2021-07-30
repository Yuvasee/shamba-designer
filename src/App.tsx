import { useReducer } from "react";
import { initState, reducer } from "./state/reducer";

export const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    return <div></div>;
};

export default App;
