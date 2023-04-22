import { useState } from 'react';




export const useDetail = () => {
    const [index, setIndex] = useState(0);


    return {
        index,
        setIndex,
    }
}