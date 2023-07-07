import { IContact, ISkill } from "./IUser";

export interface AsideListProps {
    name: string, 
    array: (IContact | ISkill) []
}
export interface ProjectsListProps {
    type: "full" | "short"
}
export interface WorkExperienceListProps {
    type: "short" | "full" 
}
export interface EducationListProps {
    type: 'short' | 'full';
}
export interface AboutListProps {
    type: "short" | 'full'
}