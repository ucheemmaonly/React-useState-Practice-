import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
    const increament = () => {
        setCount((prev) => prev + 1);
    }
    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <h1 className="text-2xl font-bold">Count: {count}</h1>
            <button
                onClick={increament}
                className="rounded-lg bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700 transition">
                Increase
            </button>
        </div>
    )
}
export default Counter;