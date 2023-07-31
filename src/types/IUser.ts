export interface IUser {
    "name": {
        "ru": string,
        "en": string
    },
    "photos": string [],
    "summary" : {
        "ru": string,
        "en": string
    },
    "contacts": IContact [],
    "skills": {
        "hard" : ISkill [] ,
        "soft": ISkill [] 
    },
    "projects" : {
        "ru": IUserProject [],
        "en": IUserProject []
    },
    "works" : {
        "ru": IUserWork [],
        "en" : IUserWork []
    },
    "education" : {
        "ru" : IUserEducation [],
        "en" : IUserEducation []
    },
    "about" : {
        "ru" : IAbout[],
        "en" : IAbout[]
    }
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
    "ghPage": string | null,
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
    "name": {
        "ru": "",
        "en": ""
    },
    "photos": [""],
    "summary" : {
        "ru": "",
        "en": ""
    },
    "contacts": 
        [{
            "title": "tel",
            "value": ""
        }],
    "skills": {
        "hard" : [""],
        "soft": [""] 
    },
    "projects" : {
        "ru": [{
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
        "en": [{
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
        }]
    },
    "works" : {
        "ru": [{
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
        "en" : [{
            "title": "",
            "company": "",
            "companyEn": "",
            "start": "",
            "finish": "",
            "important" : false,
            "skills": [""],
            "descriptionShort": [""],
            "descriptionFull": [""]
        }]
    },
    "education" : {
        "ru": [{
            "title": "",
            "info": "",
            "year": "",
            "rank": "",
            "important" : false, 
        } ],
        "en" : 
            [{
                "title": "",
                "info": "",
                "year": "",
                "rank": "",
                "important" : false, 
            } ]
    },
    "about" : {
        "ru": [""],
        "en" : [""]
    }
}