import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import App03 from "./App03";

//  1 Suíte de teste(App component) contendo 2 testes.
describe("App03 Component", () => {
    it("should render list items", () => {
        // Variável com o atributo para pelo o elemento pelo texto e atribui um renderização 
        const { getByText } = render(<App03 />)

        // Espera que esses elementos estejam no Documento
        expect(getByText("Peter")).toBeInTheDocument()
        expect(getByText("John")).toBeInTheDocument()
    });

    // Para testar a finalidade do botão
    it("should be able to add new item to the list", async () => {
        const { getByText, getByPlaceholderText } = render(<App03 />)

        // Para disparar uma ação dentro da interface da aplicação.

        const inputElement = getByPlaceholderText("Novo item")
        // Pegando o botão pelo texto 'Adicionar' e atribuindo à uma variável.
        const addButton = getByText("Adicionar") 


        // await irá pausar a execução do código até que a operação assíncrona (userEvent.setup().click(addButton)) seja concluída.
        await 
        userEvent.setup().type(inputElement, "Novo")
        await
        userEvent.setup().click(addButton)

        await waitFor(() => {
            expect(getByText("Novo")).toBeInTheDocument();
        })

        expect(getByText('Novo')).toBeInTheDocument();
    })
})