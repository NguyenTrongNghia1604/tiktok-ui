import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSearchLocation,
    faSpinner,
    faSignIn,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faCloudUploadAlt,
    faMessage,
    faUserCircle,
    faSpaghettiMonsterFlying,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

import { wrapper as PopperWrapper } from '~/components/Popper';

import Button from '~/components/Button';
import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional
// import React from 'react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import AccountItem from '~/components/AccountItem';

// menu
import Menu from '~/components/Popper/Menu';

// Image
import Image from '~/components/Image';

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'KeyBoard shortcuts',
    },
];

const currentUser = true;

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // hanldEvent
    const hanldMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUserCircle} />,
            title: 'View Profile',
            to: './feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: './feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faSpaghettiMonsterFlying} />,
            title: 'Settings',
            to: './feedback',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignIn} />,
            title: 'Log out',
            to: './feedback',
            setparate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <HeadlessTippy
                    interactive
                    // visible={searchResult.length > 0}
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
                >
                    <div className={cx('search')}>
                        <input placeholder="nhập giá trị bạn cần tìm đến đây" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearchLocation} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload video">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 100]} content="Upload ">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={hanldMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p1-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0fb49c727e342c90beb7c9dbeb56f3e4.jpeg?x-expires=1703318400&x-signature=pS2a8e7vPHUNg8pL8mDNzcYrjp8%3D"
                                alt="errr"
                                // fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/5b214eead93ba591b6495e6417d55dd8~c5_100x100.jpeg?x-expires=1703595600&x-signature=26ZdjFnmr4VpUFWIA8%2FVfntrHq0%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
