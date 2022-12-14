# simple-react-modal-plugin

## Setup

This library is available on npm, install it with: `npm i simple-react-modal-plugin` or `yarn add simple-react-modal-plugin`.

## Usage

1.  Import `simple-react-modal-plugin`:

```javascript
import Modal from 'simple-react-modal-plugin'
```

2.  Create a `<Modal>` component with setModal prop and nest its content inside of it:

## A complete example

The following example consists in a component (`ModalTester`) with a button and a modal.
The modal is controlled by the `isModalVisible` state variable and it is initially hidden, since its value is `false`.  
Pressing the button sets `isModalVisible` to true, making the modal visible.  
Inside the modal there is another button that, when pressed, sets `isModalVisible` to false, hiding the modal.

```javascript
import React, { useState } from 'react'
import Modal from 'simple-react-modal-plugin'

function ModalTester() {
	const [isModalVisible, setModalVisible] = useState(false)

	const toggleModal = () => {
		setModalVisible(!isModalVisible)
	}

	return (
		<div className="container">
			<button onClick={toggleModal}>Open Modal !</button>

			{!!isModalVisible && (
				<Modal setModal={setModalVisible}>
					Modal Oppened Successfully !
				</Modal>
			)}
		</div>
	)
}

export default ModalTester
```

**Useful links:**

-   [Modal plugin repository 📖](https://https://github.com/JyjyStudio/npm-modal-package)
-   [Storybook 📖](https://jyjystudio.github.io/npm-modal-package/?path=/story/library-modal--getting-started)
