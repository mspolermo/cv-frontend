export interface AboutBlockProps {
    type: "short" | 'full'
}
export interface AsideListProps {
    name:string, 
    array: Array<string> | { type: string; value: string; }[]
}
export interface ProjectsBlockProps {
    type: "full" | "short"
}
export interface WorkExperienceBlockProps {
    type: "short" | "full" 
}
export interface EducationBlockProps {
    type: 'short' | 'full';
}