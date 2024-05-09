import { useState } from "react"

const useModal = () => {
    const [modal, setModal] = useState({
        state: "",
        data: {}
    })

    const updateModal = ((state: string, val = {}) => setModal({ state, data: val }))
    const closeModal = () => setModal({ state: "", data: {} })
    return { modal, updateModal, closeModal }
}

export default useModal