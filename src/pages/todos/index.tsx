import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { BASE_API_URL } from "@/config";
import { TodosPage } from "@/features/Todos/TodosPage";

export default function Todos(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return ( 
       <TodosPage {...props} />
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const res = await fetch(`${BASE_API_URL}/todos`)
    const data = await res.json()
    return {
        props: {
            todos: data.todos,
        }
    }
}
