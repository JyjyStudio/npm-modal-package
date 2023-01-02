# Simple React Modal Plugin
The simplest responsive modal component for react projects.


**Useful links:**

-   [Modal plugin package 📖](https://www.npmjs.com/package/simple-react-modal-plugin)
-   [Storybook 📖](https://jyjystudio.github.io/npm-modal-package/)


## Setup

This library is available on npm, install it with: `npm i simple-react-modal-plugin` or `yarn add simple-react-modal-plugin`.

## Usage

1.  Import Modal from simple-react-modal-plugin :

```js
import Modal from 'simple-react-modal-plugin'
```

2.  Import useModal from simple-react-modal-plugin :

```js
import useModal from 'simple-react-modal-plugin/useModal'
```

3.  Create a `<Modal>` component with visible and hide props and nest its content inside of it:

## A complete example

The following example consists in a component (`AppTester`) with a button and a modal.
The modal is controlled by the `visible` state variable and it is initially hidden, since its value is `false`.  
Pressing the button sets `visible` to true, making the modal visible.  
Inside the modal there is another button that, when pressed, sets `visible` to false, hiding the modal.
You can also close the modal pressing Esc key.

```javascript
import React, { useState } from 'react'
import Modal from 'simple-react-modal-plugin'
import useModal from 'simple-react-modal-plugin/useModal'

function AppTester() {
	const { isShowing, toggle } = useModal()
	return (
		<>
			<h1>Modal Tester</h1>
			<button onClick={toggle}>Click me !</button>
			<Modal visible={visible} hide={toggle}>Modal successfully created !</Modal>
		</>
	)
}

export default AppTester
```
