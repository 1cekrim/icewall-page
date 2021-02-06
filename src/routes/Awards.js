import React, { useState } from 'react'
import { firestore } from '../Firebase'

const Awards = () => {
  const [tables, setTables] = useState([])
  const func = async () => {
    if (tables.length !== 0) {
      return
    }
    const newTables = []
    const t =
      (await firestore.collection('awards').orderBy('order', 'asc').get()) || []
    const promises = []
    t.forEach((doc) => {
      const docs = doc.data()
      const v = firestore
        .collection('awards')
        .doc(doc.id)
        .collection('awards')
        .orderBy(docs.sort_time, 'asc')
        .get()
        .then((q) => {
          const newTable = []
          q.forEach((row) => {
            newTable.push(row.data())
          })
          newTables.push({
            name: docs.name,
            awards: newTable,
          })
        })
      promises.push(v)
    })
    await Promise.all(promises)
    if (newTables.length !== 0) {
      setTables(newTables)
    }
  }

  func()

  return (
    <section id="main">
      <h3>ICEWALL 실적</h3>
      {tables.map((table, index) => (
        <div className="table-parent">
          <h4>
            {index + 1}. {table.name}
          </h4>
          <table className="table tale-striped text-white">
            <thead>
              <tr>
                <th>번호</th>
                {Object.keys(table.awards[0]).map((r) => (
                  <th>{r}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.awards.map((row, rowIdx) => (
                <tr>
                  <td>{rowIdx + 1}</td>
                  {Object.values(row).map((r) => (
                    <td>{r}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  )
}

export default Awards
