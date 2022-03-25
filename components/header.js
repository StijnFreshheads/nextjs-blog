import styles from './header.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

const name = 'Stijn';

export default function Header() {
    const { data: session } = useSession();

    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <div className={styles.logoImgContainer}>
                    <Image priority src="/images/profile.jpg" layout="fill" />
                </div>
                <h1 className={utilStyles.headingLg}>{name}</h1>
            </div>

            <div className={styles.menuItems}>
                {session ? (
                    <div className={styles.userContainer}>
                        {session.user && <h4>{session.user.name}</h4>}
                        {session.user?.image && (
                            <div className={styles.avatarContainer}>
                                <img src={session.user.image} />
                            </div>
                        )}
                        <button onClick={() => signOut()}>Sign out</button>
                    </div>
                ) : (
                    <button onClick={() => signIn()}>Sign in</button>
                )}
            </div>
        </div>
    );
}
