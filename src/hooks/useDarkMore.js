import { useEffect, useState } from 'react';

const localStorageThem = () => JSON.parse(localStorage.getItem('theme')) === 'dark';

const useDarkMore = () => {
    const [isDarkMore, setIsDarkMore] = useState(localStorageThem());
    const toggleDarkMore = () => setIsDarkMore(!isDarkMore);

    useEffect(() => {
        const html = window.document.documentElement;

        const prev = isDarkMore ? 'light' : 'dark';
        html.classList.remove(prev);

        const next = isDarkMore ? 'dark' : 'light';
        html.classList.add(next);

        localStorage.setItem('theme', JSON.stringify(next));
    }, [isDarkMore]);

    return [isDarkMore, toggleDarkMore];
};

export default useDarkMore;
