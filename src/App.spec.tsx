import { render } from '@testing-library/react';
import App from './App';


test('sum', () => {
    const { getByText } = render(<App />)

    // Testar se o conteúdo está no documento.
    expect(getByText("Hello World")).toBeInTheDocument()

    // Testar se o conteúdo tem o atributo passado.
    expect(getByText("Hello World")).toHaveAttribute("class", "test")
});

