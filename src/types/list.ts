export interface AsideListProps {
    name: string, 
    array: Array<string> | { type: string; value: string; }[]
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