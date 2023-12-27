import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310353845812232197~c5_100x100.jpeg?x-expires=1702623600&x-signature=tGEDNs8XRuIDFoaFBXDD9%2Fun%2B3U%3D"
                alt="nn"
                fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/5b214eead93ba591b6495e6417d55dd8~c5_100x100.jpeg?x-expires=1703595600&x-signature=26ZdjFnmr4VpUFWIA8%2FVfntrHq0%3D"
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
