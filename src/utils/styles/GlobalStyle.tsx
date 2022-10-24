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

`
