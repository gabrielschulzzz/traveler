import { HeroContainer } from './styles';

interface CityHeroImageProps {
    image: string;
    imageAlt: string;
}

export function CityHeroImage({ image, imageAlt }: CityHeroImageProps) {
    return (
        <HeroContainer>
            <img src={image} alt={imageAlt} />
        </HeroContainer>
    )
}