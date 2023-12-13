import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310353845812232197~c5_100x100.jpeg?x-expires=1702623600&x-signature=tGEDNs8XRuIDFoaFBXDD9%2Fun%2B3U%3D"
                alt="nn"
            />
            <div className={cx('info')}>
                <h4>
                    <span className={cx('name')}>Nguyễn Trọng Nghĩa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nghĩa@gmail.com</span>
            </div>
        </div>
    );
}

export default AccountItem;
