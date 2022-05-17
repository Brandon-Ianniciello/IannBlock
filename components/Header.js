import React from 'react';
import Image from 'next/image';

const logo = require('../public/logo.svg');

const styles = {
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[20px]`,
    headerWrapper:`flex justify-center h-full max-w-screen-xL mx-auto px-4`,
    nav : `flex justify-center items-center gap-[20px]`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`
}

const Header = () => {
  return (
    <div className={styles.header}>
        <Image
        src={logo}
        alt='logo'
        width={220}
        height={220}/>

        <div className={styles.headerWrapper}>
            <div className={styles.nav}>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>
                        Cryptocurrencies
                    </div>
                    <div className={styles.badge}></div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>
                        Exchanges
                    </div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>
                        NFT
                    </div>
                    <div className={styles.badge}></div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>
                        Cryptown
                    </div>
                    <div className={styles.badge}></div>
                </div>


                <div className={styles.navItem}>
                    <div className={styles.navLink}>
                        Portfolio
                    </div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>
                        Watchlist
                    </div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>
                        Products
                    </div>
                    <div className={styles.badge}></div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>
                        Learn
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Header