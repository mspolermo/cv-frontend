export interface IUser {
    "name": string,
    "photos": string [],
    "summary" : string,
    "contacts": 
        {
            "title": "tel" | "mailto" | "any",
            "value": string
        }[],
    "skills": {
        "hard" : ISkill [] ,
        "soft": ISkill [] 
    },
    "projects" : IUserProject [],
    "works" : IUserWork [],
    "education" : IUserEducation [],
    "about" : [
        string | {
            "head" : string,
            "value": string []
        }
    ]
}

type ISkill = string | { 
    "title": string, 
    "value": string [] 
}
export interface IUserProject {
    "name": string,
    "summary" : string,
    "repo": string,
    "ghPage": string,
    "important" : boolean,
    "tech": ISkill [],
    "description": { "title": string, "info": string }  | {
        "title": string, 
        "info": string | ( string | {
            "titleL2": string,
            "infoL2": ( string | { 
                "titleL3": string,
                "infoL3": string[] 
            })[]
        })[]   
    }[]
}
export interface IUserWork {
    "title": string,
    "company": string,
    "companyEn": string,
    "start": string,
    "finish": string,
    "important" : boolean,
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
            "tech": [""],
            "description" : [
                {
                    "title": "",
                    "info": ""
                }
            ]
        }],
    "works" : 
        [{
            "title": "",
            "company": "",
            "companyEn": "",
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
            "year": "",
            "rank": "",
            "important" : false, 
        } ],
    "about" : [""]
}