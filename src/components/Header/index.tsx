import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './styles.module.scss'

export function Header() {
    const {asPath} = useRouter()

    return (
        <header className={style.container}>
            <div className={style.content}>
                <img src="/logo.svg" alt="Dev News"/>
                <nav>
                    <Link href="/"> 
                        <a className={asPath == "/" ? style.active : ''}>  Home </a>
                    </Link>
                    <Link href="/posts"> 
                        <a className={asPath == "/posts"? style.active: ''}> Posts </a>
                    </Link>
                    <Link href="/times"> 
                        <a className={asPath == "/times"? style.active: ''}> Times do Brasileirão </a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}