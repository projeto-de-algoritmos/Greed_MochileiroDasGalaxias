(function main() {
    function knapSack(values, weights, i, target, result) {
        if(target < 0) return [Number.MIN_SAFE_INTEGER, result.slice()];
        if(i < 0 || target === 0) return [0, result.slice()];

        result.push(values[i])
        let take = knapSack(values, weights, i - 1, target - weights[i], result);
        take[0] += values[i]
        result.pop()
        let not_take = knapSack(values, weights, i - 1, target, result);

        if (take[0] > not_take[0]) {
            return take
        }
        
        return not_take
    }

    let weights = [1,2,3,4]
    let values = [50,200,150,100]
    let capacity = 7

    console.log(knapSack(values, weights, values.length - 1, capacity, [])); 
}()); 