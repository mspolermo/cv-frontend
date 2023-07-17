export interface ListPageProps {
    type: 'projects' | 'works' | 'education' | 'about' | 'hard-skills' | 'soft-skills'
}
export interface ItemPageProps {
    type: 'work' | 'project' | 'skill' | 'contacts' | 'skills'
}
export type WorkPageParams = {
    id: string;
}