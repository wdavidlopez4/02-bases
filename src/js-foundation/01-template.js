/*
    ejemplo de llamado de un modulo al app.js
 */

const emailTemplate = 
`   
    <div>   
        <h1>hola, {{name}}</h1>
        <p>¿Como vas?</p>
        <p>¿Como estas?</p>
    </div>
`

module.exports = {
    emailTemplate
}