
export interface AsideListProps {
    name:string, 
    array: Array<string> | { type: string; value: string; }[]
}
export interface ProjectsBlockProps {
    type: "full" | "short"
}
export interface WorkExperienceBlockProps {
    type: 'short' | 'full'
    work : {
        title: string,
        company: string,
        start: string,
        finish: string,
        descriptionShort: Array<string>
    }
}
export interface EducationBlockProps {
    type: 'short' | 'full'
    educate: {
        title: string,
        year: string,
        rank: string,
        info: string
    }
}
export interface AboutBlockProps {
    point: string | {
        head: string,
        value: Array<string>
    }
}