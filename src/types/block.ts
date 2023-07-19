import { IUserEducation, IUserWork, IUserProject, IAbout, IContact, ISkill } from "./IUser"

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
    point: IAbout
}
export interface ProjectDescriptionBlockProps {
    project: IUserProject
}
export interface ContactsBlockProps {
    type: 'short' | 'full',
    contacts: IContact []
}
export interface SkillBlockProps {
    type: 'short' | 'short-AllList' | 'full' | 'fullSolo',
    skill : ISkill
}