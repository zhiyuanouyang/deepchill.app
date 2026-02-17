
import { WebApp, AppCategory } from '@/app/types';

export const APPS_CATALOG: WebApp[] = [
    {
        id: '1',
        name: 'InterviewGPT',
        description: 'InterviewGPT is a powerful AI-powered interview assistant that helps you prepare for and ace your technical interviews.',
        subdomain: 'interviewgpt.deepchill.app',
        category: AppCategory.AI,
        tags: ['Tech Interview', 'AI'],
        imageUrl: 'https://picsum.photos/seed/interviewgpt/800/450',
        icon: 'https://interviewgpt.deepchill.app/logo.svg',
        isNew: true
    }
];
