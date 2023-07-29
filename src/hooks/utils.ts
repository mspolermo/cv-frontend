import { IUserProject, IUserWork } from "../types/IUser";

export function expirienceCount (start: string, finish: string) {
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
};

export function getAllSkills (item: IUserProject | IUserWork, type: 'array' | 'string') {
    const tagsArray = [];
    const allTechArray = [];   

    for (let i=0; i<item.skills.length; i++) {

        if (typeof item.skills[i] === 'string') {

            tagsArray.push(item.skills[i]);
            allTechArray.push(item.skills[i]);

        } else {

            let innerObject = item.skills[i];
            type objectKeyType = keyof typeof innerObject; 

            let objectValue = "";

            Object.keys(innerObject).forEach((key) => {

                if (typeof innerObject[key as objectKeyType] === 'string') {

                    tagsArray.push(innerObject[key as objectKeyType]);
                    objectValue += innerObject[key as objectKeyType];

                } else {

                    let innerArray: string[] = innerObject[key as objectKeyType];
                    objectValue += ` (${innerArray.join(', ')})`;

                    innerArray.forEach( item => tagsArray.push(item));

                };
            });
            allTechArray.push(objectValue);
        };
    };

    switch (type) {
        case 'array':
            return tagsArray
        case "string":
            return allTechArray.join(', ')
    }
};

export function changeLanguage (Ru: string , En: string , BrowserLanguage: string) {
    if (BrowserLanguage === 'ru' && (Ru)) {
        return Ru
    }
    if (BrowserLanguage === 'ru' && (!Ru)) {
        return En
    }
    if (BrowserLanguage === 'en' && (En)) {
        return En
    } else {
        return Ru
    }
}