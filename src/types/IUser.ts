export interface IUser {
    "name": string,
    "photos": string [],
    "summary" : string,
    "contacts": IContact [],
    "skills": {
        "hard" : ISkill [] ,
        "soft": ISkill [] 
    },
    "projects" : IUserProject [],
    "works" : IUserWork [],
    "education" : IUserEducation [],
    "about" : IAbout[]
}
export type IContact = {
    "title": string,
    "value": string
}
export type ISkill = string | { 
    "title": string, 
    "value": string [] 
}
export type IAbout = string | { 
    "title": string, 
    "value": string [] 
}
export interface IUserProject {
    "name": string,
    "summary" : string,
    "repo": string,
    "ghPage": string,
    "important" : boolean,
    "skills": ISkill [],
    "description": { "title": string, "info": string }  | {
        "title": string, 
        "info": string | ( string | {
            "titleL2": string,
            "infoL2": ( string | { 
                "titleL3": string,
                "infoL3": string[] 
            })[]
        })[]   
    }[],
    "screenshots": string []
}
export interface IUserWork {
    "title": string,
    "company": string,
    "companyEn": string,
    "start": string,
    "finish": string,
    "important" : boolean,
    "skills": ISkill [],
    "descriptionShort": string[],
    "descriptionFull": string[]
}
export interface IUserEducation {
    "title": string,
    "info": string,
    "year": string,
    "rank": string,
    "important" : boolean 
}

export const userInit: IUser = {
    "name": "",
    "photos": [""],
    "summary" : "",
    "contacts": 
        [{
            "title": "tel",
            "value": ""
        }],
    "skills": {
        "hard" : [""],
        "soft": [""] 
    },
    "projects" : 
        [{
            "name": "",
            "summary" : "",
            "repo": "",
            "ghPage": "",
            "important" : false,
            "skills": [""],
            "description" : [
                {
                    "title": "",
                    "info": ""
                }
            ],
            "screenshots": [""]
        }],
    "works" : 
        [{
            "title": "",
            "company": "",
            "companyEn": "",
            "start": "",
            "finish": "",
            "important" : false,
            "skills": [""],
            "descriptionShort": [""],
            "descriptionFull": [""]
        }],
    "education" : 
        [{
            "title": "",
            "info": "",
            "year": "",
            "rank": "",
            "important" : false, 
        } ],
    "about" : [""]
}