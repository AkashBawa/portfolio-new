import reat, { useEffect, useState } from "react";

const useCounter = (url: string = "") => {

    const [count, setCount] = useState(0)
    const [data, setData] = useState({})
    useEffect( () => {
        fetch(url).then(() => {

        })
    }, [url])



    return {count, setCount};

   
}

export default useCounter;