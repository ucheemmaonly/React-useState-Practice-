import {useState} from 'react'

const Debug = () => {
    const [count, setCount] = useState(0);
    const addTwo = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }
return (
    <div className="flex flex-col items-center gap-4 mt-10 bg-gray-200">
        <h1 className="text-2xl font-bold">{count}</h1>

        <button
            onClick={addTwo}
            className="rounded-lg bg-yellow-600 px-5 py-2 text-white font-semibold">
            Add 2
        </button>
    </div>
);
}
export default Debug;