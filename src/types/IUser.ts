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
    "projects" : IUserProject[],
    "works" : IUserWork[],
    "education" : IUserEducation [],
    "about" : [
        string | {
            "head" : string,
            "value": [string]
        }
    ]
}

export interface IUserProject {
    "id": number,
    "name": string,
    "summary" : string,
    "repo": string,
    "ghPage": string,
    "important" : boolean,
    "tech": string[],
    "description": { "title": string, "info": string } | {
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