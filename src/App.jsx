/* Pasos para crear componentes

1- Importación (de las librerías que necesitamos para crear el componente)
2- Generación de la función del componente
3- Exportación para su uso del componente

*/

/* Orden de importación de componentes
1- importación de componentes instalados
2- importación de componentes propios (orden alfabetica)
3- importación de css
*/

/* eslint no-eval: 0 */
// Paso 1 Importación de librerías
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css' // importando archivo css

// Paso 2 Generación de la función del componente. El nombre del componente debe ser igual al del archivo App.jsx
const App = () => {

    // Array destructurig
    // 1er posición : valor del estado (que inicialmente es el valor por defecto)
    // 2da posición : función que me va a permitir modificar el valor (del estado) por defecto
    // nombre de la variable estado [xxxx] nombre de la función [setXxxx]
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)

    const value = items.length > 0 ? items[items.length - 1] : '0'
    console.log('Renderización de App', value)

    return (
        <main className='react-calculator'>
            <Result value={value} />
            <Numbers onClickNumber={number => {
                console.log("Click en number", number)
                setStack(`${stack}${number}`)
            }} />
            <Functions
                onContentClear={() => {
                    console.log("Content clear")
                    setStack('')
                }}
                onDelete={() => {
                    if (stack.length > 0) {
                        const newStack = stack.substring(0, stack.length - 1)
                        console.log("onDelete", newStack)
                        setStack(newStack)
                    }
                }}
            />
            <MathOperations
                onClickOperation={operation => {
                    console.log("Operation : ", operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    console.log("Equal : ", stack, equal)
                    setStack(eval(stack).toString())
                }}
            />
        </main>)
}

// Paso 3 Exportación para su uso del componente
export default App