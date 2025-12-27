import { PrimaryButton } from "./PrimaryButton"

import { render, screen } from "@testing-library/react";

describe('PrimaryButton()', ()=>{

    it('should render the button with correct actionType', () => {

        render(<PrimaryButton actionType="deleted"></PrimaryButton>)


        const element = screen.getByText('Clicked to deleted')
        expect(element).toBeInTheDocument()
    })
    it('should render the button with correct actionType post', () => {

        render(<PrimaryButton actionType="post"></PrimaryButton>)


        const element = screen.getByText('Clicked to post')
        expect(element).toBeInTheDocument()
    })


})