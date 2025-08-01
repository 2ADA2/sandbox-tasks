// const data: any[] = []
// const data: any[] = [1]
const data: any[] = [1986233455453410, 1593343454534820]


function solution(size: any[]): number {
    let width = Math.max(...size)
    let height = Math.min(...size)
    let last = width % height;

    if(last){
        return solution([last, height])
    }
    return height
}

console.log(solution(data))
















