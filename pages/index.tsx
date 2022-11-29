import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import { json } from "stream/consumers"
import { getUsers } from "../lib/users"

export default function Home() {
const [user, setUsers] =useState()
  useEffect(()=>{
    fetch('/api/users')
    .then(res => res.json())
    .then( data => setUsers(data))
  },[])
  return (
  <pre>{JSON.stringify(user)}</pre>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const users = await getUsers()
console.log(users)
  return ({
    props:{
      users
    },
    revalidate: 5
  })
}