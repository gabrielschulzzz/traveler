import { Dispatch, SetStateAction } from 'react'
import { AiOutlineCalendar, AiOutlineCamera } from 'react-icons/ai'
import { FiCoffee } from 'react-icons/fi'

import { CategoryContainer, RadioBox, Container } from './styles'

interface CardCategoryPickerProps {
    setType: Dispatch<SetStateAction<string>>;
}

export function CardCategoryPicker({ setType }: CardCategoryPickerProps) {
    return (
        <Container>
            <label>Selecione uma categoria</label>
            <CategoryContainer>
                <RadioBox onClick={() => setType('food')}>
                    <p><FiCoffee /></p>
                    <h3>Comida e bebida</h3>
                </RadioBox>

                <RadioBox onClick={() => setType('turistic')}>
                    <p><AiOutlineCamera /></p>
                    <h3>Pontos Turisticos</h3>
                </RadioBox>

                <RadioBox onClick={() => setType('event')}>
                    <p><AiOutlineCalendar /></p>
                    <h3>Eventos Organizados</h3>
                </RadioBox>
            </CategoryContainer>
        </Container>
    )
}