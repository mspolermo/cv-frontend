import { IUserEducation, IUserWork, IUserProject } from "./IUser"

export interface ProjectsBlockProps {
    type: 'short' | 'full',
    project: IUserProject
}
export interface WorkExperienceBlockProps {
    type: 'short' | 'full',
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