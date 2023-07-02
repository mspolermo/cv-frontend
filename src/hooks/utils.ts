export default function expirienceCount (start: string, finish: string) {
    let startArr = start.split('.')
    let startTime = new Date ( +startArr[1], +startArr[0]-1)

    let finishArr = finish.split('.')
    let finishTime = new Date ( +finishArr[1], +finishArr[0]-1) 

    let days = Math.ceil(Math.abs(finishTime.getTime() - startTime.getTime()) / (1000 * 3600 * 24));

    return days
}