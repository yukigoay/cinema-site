import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import Image from '../image/image';
import Text from '../text/text';

type HeaderProps = {
    /**
     * Button as Link URL
     */
    headerpath?: string;

    /**
     * Button border type
     */
    clubpath?: string;

    /**
     * Button border type
     */
    weight?: 'light' | 'bold';

    menuList?: Array<string>;
    loginList?: Array<string>;
    /**
     * Optional click handler
     */

    onClick?: () => void;
};

const Header = ({
    headerpath,
    menuList = [],
    clubpath,
    loginList = [],
}: HeaderProps) => {
    return (
        <header className={`${styles.headerContainer}`}>
            <div className={`${styles.leftContainer}`}>
                <div className={`${styles.headerImg}`}>
                    <Image imgpath={headerpath} location="/"></Image>
                </div>
                <div className={`${styles.menuContainer}`}>
                    {menuList.map((item, index) => (
                        <Text key={index} label={item} weight="bold" />
                    ))}
                </div>
            </div>
            <div className={`${styles.rightContainer}`}>
                <div className={`${styles.clubContainer}`}>
                    <Image imgpath={clubpath}></Image>
                </div>
                <div className={`${styles.loginContainer}`}>
                    {loginList.map((item, index) => (
                        <Text
                            key={index}
                            label={item}
                            weight="bold"
                            size="h4"
                        />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
