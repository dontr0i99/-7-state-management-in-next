'use client';

import useCounterStore from "../stores/counterStores";    
 
export default function Counter() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        // <div className="flex flex-col items-center">
        //     <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
        //     <div className="flex space-x-4">
        <div>
            <h2>Count: {count}</h2>
            { <button onClick={increment} /*className="px-4 py-2 bg-blue-500 text-white rounded"*/>+</button> }
            <button onClick={decrement} /*className="px-4 py-2 bg-red-500 text-white rounded"*/>-</button>
            <button onClick={reset} /*className="px-4 py-2 bg-gray-500 text-white rounded"*/>Reset</button>
        </div>
        // </div>
    );
}