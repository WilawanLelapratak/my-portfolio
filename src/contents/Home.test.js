import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Input from './Home';

describe("Input Component", () => {
    it("rendered input", () => {
        const {getByTestId} = render(<Input />);
        const input = getByTestId("searchBar");
        expect(input).toBeTruthy();
    });

    it("change on input causes change on header", async () => {
        const {getByTestId} = render(<Input />);
        const input = getByTestId("searchBar");
        const header = getByTestId("displaySearch");
        const inputWord = "Wove";
        await act(async () => {
            await userEvent.type(input, inputWord);
        });
        expect(header.innerHTML).toBe(inputWord);
    });
})
