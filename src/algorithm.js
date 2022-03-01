
(function main() {
    function knapSack(values, weights, i, target) {
        if(target < 0) return Number.MIN_SAFE_INTEGER;
        if(i < 0 || target === 0) return 0;

        let take = knapSack(values, weights, i - 1, target - weights[i]) + values[i];
        let not_take = knapSack(values, weights, i - 1, target);

        return Math.max(take, not_take);
    }

    let weights = [1,2,3,4]
    let values = [50,200,150,100]
    let capacity = 7

    console.log(knapSack(values, weights, values.length - 1, capacity)); 
}());