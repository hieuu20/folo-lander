import muchMore1 from '@public/much-more/1.webp';
import muchMore3 from '@public/much-more/3.webp';
import muchMore5 from '@public/much-more/5.webp';
import muchMore6 from '@public/much-more/6.webp';
import muchMore7 from '@public/much-more/7.webp';
import muchMore9 from '@public/much-more/9.png';
import muchMore9Mb from '@public/much-more/9-img-mb.png';

import muchMore10 from '@public/much-more/10.webp';

import muchMore9Icon from '@public/much-more/9-icon.png';
import button9Mb from '@public/much-more/9-bt-mb.png';

import button9Pc from '@public/much-more/9-bt-pc.png';

import { StaticImageData } from 'next/image';

export interface More {
    id: number;
    title: string;
    description: string;
    img: StaticImageData;
    backgroundColor: string;
    titleColor: string;
    dscColor: string;
    backgroundRadiant?: string;
    backgroundImg?: string;
    absolute?: { bottom?: boolean; right?: boolean };
    larger?: boolean;
    isCommingSoon?: boolean;
    isAi?: boolean;
    icon?: StaticImageData;
    buttonImgPc?: StaticImageData;
    buttonImgMb?: StaticImageData;
    imgMb?: StaticImageData;
    video?: string;
}

export const moreList: More[] = [
    {
        id: 1,
        title: 'Subscriptions, made simple.',
        description: 'Create flexible subscriptions with channels, collabs, and niche audiences.',
        img: muchMore1,
        backgroundColor: '#E6F3FF',
        titleColor: '#131416',
        dscColor: '#4D5053',
        video: '/much-more/video1.mp4',
    },
    {
        id: 2,
        title: 'Pay-To-View Experiences.',
        description: 'Monetize individual posts, drops, or premium exclusives on your terms.',
        img: muchMore3,
        backgroundColor: '#171916',
        titleColor: '#fff',
        dscColor: '#FFFFFFCC',
        absolute: { bottom: true, right: false },
        video: '/much-more/video2.mp4',
    },
    {
        id: 3,
        title: 'Collaboration, Reimagined',
        description:
            'Why just tag your partners when you can share content, products, and revenue.',
        img: muchMore5,
        backgroundColor: '',
        titleColor: '#fff',
        dscColor: '#FFFFFFCC',
        backgroundImg: '/much-more/bg5.webp',
        video: '/much-more/video3.mp4',
    },
    {
        id: 4,
        title: 'Create your own Services',
        description:
            'Offer paid calls, messaging, ratings, and custom requests with flexible pricing options.',
        img: muchMore6,
        backgroundColor: '#2F5DCB',
        titleColor: '#fff',
        dscColor: '#FFFFFFCC',
        absolute: { bottom: true, right: false },
    },
    {
        id: 5,
        title: 'Value Added Features',
        description:
            'No third parties – just powerful tools and benefits for creators, brands and users.',
        img: muchMore7,
        backgroundColor: '',
        titleColor: '#fff',
        dscColor: '#FFFFFFCC',
        backgroundRadiant: 'linear-gradient(180deg, #376CEC 28.81%, #CADAFF 100%)',
        absolute: { bottom: true, right: true },
        larger: true,
        video: '/much-more/video5.mp4',
    },
    {
        id: 6,
        title: 'AI-Driven Affiliate',
        description: 'AI promotes brand products in your public content - you earned % view-share.',
        img: muchMore9,
        backgroundColor: '',
        titleColor: '#fff',
        dscColor: '#FFFFFFCC',
        backgroundImg: '/much-more/bg9.webp',
        isCommingSoon: true,
        buttonImgPc: button9Pc,
        buttonImgMb: button9Mb,
        icon: muchMore9Icon,
        isAi: true,
        imgMb: muchMore9Mb,
        video: '/much-more/video6.mp4',
    },
    {
        id: 7,
        title: 'And much more',
        description:
            'Give your fans the best experience while protecting your. The Platform for Everyone.',
        img: muchMore10,
        backgroundColor: '#EEF7FF',
        titleColor: '#131416',
        dscColor: '#4D5053',
        // absolute: { bottom: true, right: false },
    },
];
