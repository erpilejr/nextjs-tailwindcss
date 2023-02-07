import Link from 'next/link'

import styles from './TopNav.module.css'

export const TopNav = () => {
    return (
        <div className={styles.container}>
            <nav>
                <Link href="/" className='p-10'>
                    Home
                </Link>
                <Link href="/about" className='p-10'>
                    About
                </Link>
                <Link href="/todos" className='p-10'>
                    Todos
                </Link>
            </nav>
        </div>
    )
}