import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import App02 from "./App02";

//  1 Suíte de teste(App component) contendo 2 testes.
describe("App02 Component", () => {
    it("should render list items", () => {
        // Variável com o atributo para pelo o elemento pelo texto e atribui um renderização 
        const { getByText } = render(<App02 />)

        // Espera que esses elementos estejam no Documento
        expect(getByText("Pedro")).toBeInTheDocument()
        expect(getByText("Junior")).toBeInTheDocument()
        expect(getByText("Nayara")).toBeInTheDocument()
    });

    // Para testar a finalidade do botão
    it("should be able to add new item to the list", async () => {
        const { getByText, debug } = render(<App02 />)


        // Para disparar uma ação dentro da interface da aplicação.
        // Pegando o botão pelo texto 'Adicionar' e atribuindo à uma variável.
        const addButton = getByText("Adicionar") 

        // debug voltará um log 
        debug() // Antes do click

        // await irá íncrona (userEvent.setup().click(addButton)) seja concluída.
        await 
        userEvent.setup().click(addButton)

        debug() // Depois do click 

        expect(getByText('Novo')).toBeInTheDocument();
    })
})