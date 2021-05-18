import '@testing-library/jest-dom'
import {render, screen, cleanup} from '@testing-library/react';
import MainCard from '../MainCard/MainCard'
import MotivationCard from '../MainCard/MotivationCard/MotivationCard'
import Sidebar from '../MainCard/Sidebar/Sidebar'
import Cards from '../MainCard/MotivationCard/Cards/Cards'
test('should render MainCard component', () => {
    render(<MainCard />)
    const mainCardElement = screen.getByTestId('main-card')
    expect(mainCardElement).toBeInTheDocument();
})

test('should render MotivationCard component', () => {
    render(<MotivationCard />)
    const motivationCardElement = screen.getByTestId('motivation-card')
    expect(motivationCardElement).toBeInTheDocument();
})

test('should render Sidebar component', () => {
    render(<Sidebar/>)
    const sidebarElement = screen.getByTestId('sidebar')
    expect(sidebarElement).toBeInTheDocument();
})

test('should render Cards component', () => {
    render(<Cards />)
    const cardsElement = screen.getByTestId('cards')
    expect(cardsElement).toBeInTheDocument();
})

