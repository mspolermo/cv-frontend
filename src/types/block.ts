import { IUserEducation, IUserWork, IUserProject } from "./IUser"

export interface ProjectsBlockProps {
    type: 'short' | 'full' | 'extended',
    index?: number,
    project: IUserProject
}
export interface WorkExperienceBlockProps {
    type: 'short' | 'full' | 'extended',
    work : IUserWork
}
export interface EducationBlockProps {
    type: 'short' | 'full',
    educate: IUserEducation
}
export interface AboutBlockProps {
    point: string | {
        head: string,
        value: Array<string>
    }
}
export interface ProjectDescriptionBlockProps {
    project: IUserProject
}