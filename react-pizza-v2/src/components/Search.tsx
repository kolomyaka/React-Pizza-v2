import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetSearchPizzasQuery } from '../api/getPizzas';
import { useDebounce } from '../Hooks/useDebounce';
import { setSearchValue } from '../store/slices/filterSlice';

type Props = {};

export const Search = (props: Props) => {
    const dispatch = useDispatch();

    const [stringValue, setStringValue] = useState<string>('');

    const debouncedSearchValue = useDebounce(stringValue, 300);

    useEffect(() => {
        dispatch(setSearchValue(debouncedSearchValue));
    }, [debouncedSearchValue]);

    return (
        <>
            <label className="search">
                <input
                    type="text"
                    value={stringValue}
                    onChange={(e) => setStringValue(e.target.value)}
                    placeholder="Поиск..."
                />
                {stringValue && (
                    <svg
                        onClick={() => setStringValue('')}
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
