'use strict'
const counter = (number) => {
    let count = number;
    const increase = () => {
        return ++count;
    }
    const decrease = () => {
        return --count;
    }
    const value = () => {
        return count;
    }
    return {
        increase,
        decrease,
        value
    }
}


