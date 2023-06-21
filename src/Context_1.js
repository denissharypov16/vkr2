import { createContext, useState } from "react";
import { toast } from 'react-toastify';

const Context = createContext()

const ContextProvider = ({ children }) => {

    const [busketStatus, setBusketStatus] = useState(false)

    const BusketFunc = () => setBusketStatus(busketStatus => !busketStatus)

    const NumberFormatterFunc = (number = 0) => {
        const formatterNumber = new Intl.NumberFormat("ru")
        return formatterNumber.format(number)
    }

    const notify = () => toast.success(`Добавлено`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })

    return (
        <Context.Provider value={{ BusketFunc, busketStatus, NumberFormatterFunc, notify }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }