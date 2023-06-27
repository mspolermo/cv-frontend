export interface IUser {
    "name": string,
    "photo": string,
    "summary" : string,
    "contacts": 
        {
            "type": "tel" | "mailto" | "any",
            "value": string
        }[],
    "skills": {
        "hard" : [string],
        "soft": [string] 
    },
    "projects" : 
        {
            "id": number,
            "name": string,
            "link": string,
            "tech": [string]
        }[],
    "works" : 
        {
            "title": string,
            "company": string,
            "start": string,
            "finish": string,
            "important" : boolean,
            "descriptionShort": [string],
            "descriptionFull": [string]
        }[],
    "education" : 
        {
            "title": string,
            "info": string,
            "start": string,
            "finish": string,
            "rank": string 
        } [],
    "about" : [
        string | {
            "head" : string,
            "value": [string]
        }
    ]
}
export const userInit: IUser = {
    "name": "",
    "photo": "",
    "summary" : "",
    "contacts": 
        [{
            "type": "tel",
            "value": ""
        }],
    "skills": {
        "hard" : [""],
        "soft": [""] 
    },
    "projects" : 
        [{
            "id": 0,
            "name": "",
            "link": "",
            "tech": [""]
        }],
    "works" : 
        [{
            "title": "",
            "company": "",
            "start": "",
            "finish": "",
            "important" : false,
            "descriptionShort": [""],
            "descriptionFull": [""]
        }],
    "education" : 
        [{
            "title": "",
            "info": "",
            "start": "",
            "finish": "",
            "rank": "" 
        } ],
    "about" : [""]
}