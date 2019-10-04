import React, { useEffect, useState } from 'react'
import useForm from 'react-hook-form'
import axios from 'axios'
import { RouteComponentProps, Link } from '@reach/router'
import { Client, query as q, Expr } from 'faunadb'
// @ts-ignore
import json from 'faunadb/src/_json'

const db = {
  query: async (expr: Expr) => {
    const result = await axios.post(
      'https://faunadb-auth.herokuapp.com/db',
      expr,
      {
        withCredentials: true
      }
    )

    return json.parseJSON(JSON.stringify(result.data))
  }
}

const NotesPage: React.FC<RouteComponentProps> = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    db.query(
      q.Map(q.Paginate(q.Match(q.Index('all_notes'))), x => q.Get(x))
    ).then(response => setNotes(response.data))
  }, [])

  console.log(notes)

  return (
    <div className="container">
      {notes.map((note: any) => (
        <div className="card p-3 mb-2">{note.data.content}</div>
      ))}
    </div>
  )
}

export default NotesPage
