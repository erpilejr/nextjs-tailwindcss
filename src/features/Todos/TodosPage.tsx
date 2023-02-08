import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { Head } from '@/components/Head/Head'

import styles from './TodosPage.module.css'

type Props = {
    todos: any[]
}

export function TodosPage({
    todos,
}: Props) {
    console.log('todos!', todos) 
    return ( 
        <div className={styles.container}>
            <Head title='Todos'/>
            <h1>Todos</h1>
            <ul>
                {(todos || []).map(todo => {
                    return <li>{todo?.name}</li>
                })}
            </ul>
            <input className={styles.input}></input>
            <div className={styles.buttonWrap}>
                <button>Add Todo</button>
            </div>
        </div>
    )
}
