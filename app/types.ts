
export interface WebApp {
    id: string;
    name: string;
    description: string;
    subdomain: string;
    category: AppCategory;
    tags: string[];
    imageUrl: string;
    icon: string;
    isNew?: boolean;
}

export enum AppCategory {
    // PRODUCTIVITY = 'Productivity',
    // CREATIVE = 'Creative',
    // ANALYTICS = 'Analytics',
    AI = 'Artificial Intelligence',
    // DEVELOPER = 'Developer Tools'
}

export interface ChatMessage {
    role: 'user' | 'assistant';
    text: string;
}
