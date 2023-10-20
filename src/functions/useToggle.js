import React, { useState } from 'react'
// Функція для ТОГГЛУ (перемикач)
const useToggle = () => {
	const [toggleValue, setToggleValue] = useState('')
	// функція toggler - перемикач
	const toggler = () => {
		setToggleValue(!toggleValue)
	}
	return [toggleValue, toggler]
}


export default useToggle