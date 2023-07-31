export interface ListPageProps {
    type: 'projects' | 'works' | 'education' |
            'about' | 'hard-skills' | 'soft-skills' |
            'aboutEn' | 'educationEn' | 'worksEn' |
            'projectsEn';
}
export interface ItemPageProps {
    type: 'work' | 'project' | 'skill' | 'contacts' | 'skills' | 'workEn' | 'projectEn'
}
export type WorkPageParams = {
    id: string;
}