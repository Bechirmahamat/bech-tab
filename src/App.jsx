import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tabs-project";
import Title from "./Title";
import Button from "./Button";
import Tab from "./Tab";
function App() {
    const [data, setData] = useState(0);
    const [loading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(0);
    async function fething() {
        const resp = await fetch(url);
        const data = await resp.json();
        setData(data);
        setIsLoading(false);
    }
    useEffect(() => {
        fething();
    }, []);
    function handlingClick(value) {
        setIndex(value);
    }

    if (loading) {
        return (
            <main className="py-2">
                <Title />
                <div className="spinner"></div>
            </main>
        );
    }
    return (
        <main className="">
            <Title />
            <div className="SingleTab">
                {" "}
                <Button
                    btn={data.map((e) => e.company)}
                    Handler={handlingClick}
                    active={index}
                />
                <Tab data={data[index]} index={index} />
            </div>
        </main>
    );
}

export default App;
