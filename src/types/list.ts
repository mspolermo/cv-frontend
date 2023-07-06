export interface AsideListProps {
    name: string, 
    array: (string | { title: string; value: string | string[]; })[]
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