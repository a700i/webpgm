import { useState } from "react";
import "./App.css";

function App() {
    const [size, setSize] = useState({ width: 300, height: 0 });

    const decreaseWidth = () => {
        if (size.width > 0) {
            setSize((prevSize) => ({ ...prevSize, width: prevSize.width - 20 }));
        }
    };

    const increaseHeight = () => {
        if (size.height < 150) {
            setSize((prevSize) => ({ ...prevSize, height: prevSize.height + 10 }));
        }
    };

    return (
        <>
            <h1>너비 : {size.width}, 높이 : {size.height}</h1>
            <button onClick={decreaseWidth}>너비 감소</button>
            <button onClick={increaseHeight}>높이 증가</button>
        </>
    );
}

export default App;
