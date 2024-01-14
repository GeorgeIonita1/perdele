'use client'

import { useEffect, useState } from "react";

function Header({ children }: { children: React.ReactNode}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        setIsVisible(scrollPosition > currentScrollPosition || currentScrollPosition < 70);

        setScrollPosition(currentScrollPosition);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPosition])

    return (
        <header className={`${isVisible ? 'header-visible' : ''} fixed w-full bg-inherit z-50 flex md:justify-between items-center py-6 px-8`}>
            {children}
        </header>
    );
}

export default Header;
