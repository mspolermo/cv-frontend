export interface ListPageProps {
    type: 'projects' | 'works' | 'education' | 'about'
}
export interface ItemPageProps {
    type: 'work' | 'project' | 'contacts'
}
export type WorkPageParams = {
    id: string;
}