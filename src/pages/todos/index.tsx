import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, Session, useSession } from '@supabase/auth-helpers-react'

import { Database } from '@/schema/schema'

type Todos = Database['public']['Tables']['Todos']['Row']
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { BASE_API_URL } from "@/config";
import { TodosPage } from "@/features/Todos/TodosPage";

export default function Todos() {
    const session = useSession()
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState(null)

    async function getTodos() {
        try {
          setLoading(true)
    
          let { data, error, status } = await supabase
            .from('Todos')
            .select()
    
          if (error && status !== 406) {
            throw error
          }
    
          if (data) {
            console.log("Todos Data", data)
            setTodos(data)
          }
        } catch (error) {
          alert('Error loading user data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
      }

    useEffect(() => {
        getTodos()
    }, [session])

    return ( 
       <TodosPage todos={todos} />
    )
}

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//     const res = await fetch(`${BASE_API_URL}/todos`)
//     const data = await res.json()
//     return {
//         props: {
//             todos: data.todos,
//         }
//     }
// }
