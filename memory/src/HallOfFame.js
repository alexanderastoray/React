import React from "react";
import './HallOfFame.css'

const HallOfFame = ( {entries}) => (
    <table className="hallOfFame">
        <tbody>
           {entries.map(({id,guesses,date,player}) => (
               <tr key={id}>
                   <td className="player">{date}</td>
                   <td className="guesses">{guesses}</td>
                   <td className="date">{player}</td>
               </tr>
           ))}
        </tbody>
    </table>
)

export default HallOfFame

export const FAKE_OF = [
    { id: 1, guesses: 18, date:'01/02/2022', player:'Jane'},
    { id: 2, guesses: 23, date:'02/02/2022', player:'Kevin'},
    { id: 3, guesses: 31, date:'03/02/2022', player:'Louisa'},
    { id: 0, guesses: 48, date:'04/02/2022', player:'Marc'}
]