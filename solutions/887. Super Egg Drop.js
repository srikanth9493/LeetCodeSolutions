const superEggDrop = function (maxEggs, maxFloors) {
    const last = new Array(maxEggs + 1).fill(0)
    let steps = 0
    while (last[maxEggs] < maxFloors) {
        steps++
        for (let eggs = maxEggs; eggs > 0; eggs--) {
            last[eggs] = 1 + last[eggs] + last[eggs - 1]
        }
    }
    return steps
}
