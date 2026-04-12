import React from 'react'
import Datafooterpage from './Datafooterpage';

function Eyetable(props) {
    const a = props.userlist;

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">sno</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Username</th>
                    <th scope="col">Mobile</th>

                </tr>
            </thead>
            <tbody>
                {a.map((d) => {
                    return (
                        <tr>
                            <th scope="row">01</th>
                            <td>{d.id}</td>
                            <td>{d.eyeColor}</td>
                            <td>ghg</td>
                            <td>hhh</td>
                            <td>ooo</td>
                        </tr>
                    )
                })}

            </tbody>
            <tfoot>
                <tr>
                    <td>{a.length}</td>
                    </tr>
                    <tr>
                        <td colSpan={6}>
                            <Datafooterpage dlength={a} />
                        </td>
                    </tr>
            </tfoot>
        </table>
    )
}

export default Eyetable