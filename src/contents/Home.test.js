import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Input from './Home';

describe("Input Component", () => {
    it("rendered input", () => {
        const {getByTestId} = render(<Input />);
        const input = getByTestId("searchBar");
        expect(input).toBeTruthy();
    });

    it("change on input causes change on header", async () => {
        await act(async () => {
            const {getByTestId} = render(<Input />);
            const input = getByTestId("searchBar");
            // const header = getByTestId("displaySearch");
            // const inputWord = "Wove";
            await fireEvent.change(input, { target: { value: inputWord } });
            expect(input).toBeTruthy();
            // expect(header.innerHTML).toBe(inputWord);
        });
    });
})
