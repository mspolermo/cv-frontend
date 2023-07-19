export interface ListMapperProps {
    type: 'short' | 'full',
    name: blockNames
}

export type blockNames = 'hard-skills' | 'soft-skills' | 'works' | 
                            'projects' | 'education' | 'about' |
                            'hard-skills-AllList' | 'soft-skills-AllList';