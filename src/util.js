import _u from 'underscore';


let sum = (...values) => {
    return _u.reduceRight(values, (total, current) => {
        return current + total; 
    }, 0);
};


export {sum};
