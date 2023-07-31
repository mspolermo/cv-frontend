import { IUserProject, IUserWork } from "../types/IUser";

export function expirienceCount (start: string, finish: string, language: string = 'ru') {
    let startArr = start.split('.')
    let startTime = new Date ( +startArr[1], +startArr[0]-1)

    let finishArr = finish.split('.')
    let finishTime = new Date ( +finishArr[1], +finishArr[0]-1) 

    let days = Math.ceil(Math.abs(finishTime.getTime() - startTime.getTime()) / (1000 * 3600 * 24));
    let month = Math.floor(days/30)
    let years = Math.floor(month/12)

    return getLocalizedDuration(years, (month - years*12), language)
};
function getLocalizedDuration(years: number, months: number, language: string): string {
    if (language === 'ru') {
        const yearsText = years > 0 ? (years === 1 ? 'год' : (years >= 2 && years <= 4 ? 'года' : 'лет')) : '';
        const monthsText = months === 1 ? 'месяц' : (months >= 2 && months <= 4 ? 'месяца' : 'месяцев');
        return years > 0 ? `${years} ${yearsText} ${months} ${monthsText}` : `${months} ${monthsText}`;
    } else {
        const yearsText = years > 0 ? (years === 1 ? 'year' : 'years') : '';
        const monthsText = months === 1 ? 'month' : 'months';
        return years > 0 ? `${years} ${yearsText} ${months} ${monthsText}` : `${months} ${monthsText}`;
    }
}
export function getAllSkills(item: IUserProject | IUserWork) {
    const tagsArray: string[] = item.skills.flatMap((skill) =>
        typeof skill === 'string' ? skill : Object.values(skill).flat()
    );

    return tagsArray;
}

export function changeLanguage(Ru: string, En: string, BrowserLanguage: string): string {
    if (BrowserLanguage === 'en' && En) {
        return En;
    } else {
        return Ru;
    }
}