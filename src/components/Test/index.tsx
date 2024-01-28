import { useEffect, useState } from "react"

export function Test() {

    const [count, setCount] = useState(0);

    function plus() {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log('Rodei sem[]')
    });

    useEffect(() => {
        console.log('Rodei pq aumentou um número')
    }, [count]);

    useEffect(() => {
        console.log('Rodei com[]')
    }, []);

    return (
        <div>
            <p>O número é: {count}</p>
            <button onClick={plus}>Aumentar</button>
        </div>
    )
}