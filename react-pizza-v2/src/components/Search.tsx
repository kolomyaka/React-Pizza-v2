import React, { useEffect, useState } from 'react';
import { useDebounce } from '../Hooks/useDebounce';

type Props = {};

export const Search = (props: Props) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {}, [debouncedValue]);

    return (
        <>
            <label className="search">
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Поиск..."
                />
                {searchValue && (
                    <svg
                        onClick={() => setSearchValue('')}
                        className="icon close"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px">
                        <path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)" />
                        <path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)" />
                    </svg>
                )}
            </label>
        </>
    );
};
