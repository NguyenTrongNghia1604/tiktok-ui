import { useEffect, useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleXmark, faSearchLocation } from '@fortawesome/free-solid-svg-icons';

import { wrapper as PopperWrapper } from '~/components/Popper';

import HeadlessTippy from '@tippyjs/react/headless'; // different import path!

import AccountItem from '~/components/AccountItem';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// useRef
function Search() {
    const [searchValues, setSearchValue] = useState('');

    const [searchResult, setSearchResult] = useState([]);

    const [showResualt, setShowResualt] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handlClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handlResualt = () => {
        setShowResualt(false);
    };

    return (
        <>
            <HeadlessTippy
                interactive
                visible={showResualt && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>account</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handlResualt}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValues}
                        placeholder="nhập giá trị bạn cần tìm đến đây"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => {
                            setShowResualt(true);
                        }}
                    />

                    {!!searchValues && (
                        <button onClick={handlClear} className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearchLocation} />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
