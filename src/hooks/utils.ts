export default function expirienceCount (start: string, finish: string) {
    let startArr = start.split('.')
    let startTime = new Date ( +startArr[1], +startArr[0]-1)

    let finishArr = finish.split('.')
    let finishTime = new Date ( +finishArr[1], +finishArr[0]-1) 

    let days = Math.ceil(Math.abs(finishTime.getTime() - startTime.getTime()) / (1000 * 3600 * 24));
    let month = Math.floor(days/30)
    let years = Math.floor(month/12)

    let result;

    if (years == 0) {
        result = [0, month]
    } else {
        result = [years, month - years*12]
    } 


    return (result[0] + ' years ' + result[1] + ' months' )
}