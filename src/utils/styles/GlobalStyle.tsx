import { createGlobalStyle } from 'styled-components'

export default function GlobalStyle() {
	return <StyledGlobalStyle />
}

const StyledGlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        margin: 0;
		padding: 0;
		box-sizing: border-box;
    }

	body, html, #root {
		height: 100%;
	}

	#root {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	body {
		font-family: Rubik, Helvetica, Arial, sans-serif;
		webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	html {
		scroll-behavior: smooth;
	}

	input {
        width: 100%;
		padding: 5px !important;
		margin-bottom: 5px !important;
		font-size: 1rem !important;
		height: auto !important;
		border-radius: 0 !important;
		border: 1px solid #c0c4d6;
    }
	label {
		margin: 5px 0;
	}
`
