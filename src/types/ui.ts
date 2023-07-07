export interface ModalProps {
    type: "load" | "error",
    error? : string
}
export interface SkillTagProps {
    tag: string
}
export interface SliderProps {
    type: 'small' | 'wide',
    images: string [];
}