import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from './App'


it('should render app component with async data', async()=>{

    render(<App ></App>)


    const element = screen.getByText('Hello world');

    expect(element).toBeInTheDocument();

})