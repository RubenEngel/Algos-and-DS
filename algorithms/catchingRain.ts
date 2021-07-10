function trap(heightArray: number[]): number {
    let totalCapacity = 0;
    let complete = false;
    let i = 0;
    while (complete === false) {
        let startContainer = {index: i, height: heightArray[i]};
        let maxContainerCapacity = 0;
        let realContainerCapacity = 0;
        let endContainer = {} as {index: number, height: number};
        for (let j=i+1;; j++) {
            if (j === heightArray.length) {
                complete = true
                totalCapacity += realContainerCapacity;
                break;
            };
            let maxDepth = startContainer.height - heightArray[j];
            // a container is succesfully closed
            if (maxDepth <= 0) {
                totalCapacity += maxContainerCapacity;
                i = j;
                break;
            } else {
                maxContainerCapacity += maxDepth;
            }
            if (!endContainer.height || heightArray[j] > endContainer.height) {
                endContainer.index = j;
                endContainer.height = heightArray[j];
                realContainerCapacity = maxContainerCapacity - (startContainer.height - endContainer.height) * (endContainer.index - startContainer.index)
            }
        }
    }
    return totalCapacity;
}

const input = [0,1,0,2,1,0,1,3,2,1,2,1];
// const input = [10,0,0,0,1,0,5,1];
console.log(trap(input))