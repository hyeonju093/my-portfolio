import type { Metadata } from 'next';
import '../src/index.css';

export const metadata: Metadata = {
    title: '홍현주 | 프론트엔드 개발자 포트폴리오',
    description: '사용자가 오래 머무르고 싶은 웹사이트를 만드는 프론트엔드 개발자 홍현주입니다.',
    keywords: ['프론트엔드', '개발자', '홍현주', '포트폴리오', 'React', 'Next.js', 'TypeScript'],
    authors: [{ name: '홍현주' }],
    openGraph: {
        title: '홍현주 | 프론트엔드 개발자 포트폴리오',
        description: '사용자가 오래 머무르고 싶은 웹사이트를 만드는 프론트엔드 개발자 홍현주입니다.',
        url: 'https://hyeonju.me.kr/',
        siteName: '홍현주 포트폴리오',
        images: [
            {
                url: '/assets/profile.jpg.webp',
                width: 800,
                height: 800,
                alt: '홍현주 프로필 이미지',
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}