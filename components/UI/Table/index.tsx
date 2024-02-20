import React from 'react'
import "./table.css"

const table = () => {
  return (
    <div>
      <table className="rounded-md text-white">
        <tr>
          <th>Bidder</th>
          <th>Price ($)</th>
          <th>Date (dd/mm/yy)</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>cypher</td>
          <td>500</td>
          <td>03/02/24</td>
          <td>12:45 pm</td>
        </tr>
        <tr>
          <td>bliss</td>
          <td>500</td>
          <td>03/02/24</td>
          <td>12:45 pm</td>
        </tr>
        <tr>
          <td>Dave</td>
          <td>500</td>
          <td>03/02/24</td>
          <td>12:45 pm</td>
        </tr>
        <tr>
          <td>Moses</td>
          <td>500</td>
          <td>03/02/24</td>
          <td>12:45 pm</td>
        </tr>
        <tr className='text-[#d293e7]'>
          <td>Base Price</td>
          <td>500</td>
          <td>03/02/24</td>
          <td>12:45 pm</td>
        </tr>
      </table>
    </div>
  );
}

export default table