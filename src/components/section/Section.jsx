import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyles'
import { CartIcon } from '../navbar/Navbar.elements';
import { Heading, Img, ImgWrapper, InfoColumn, InfoRow, Sec, Subtitle, TextWrapper, TopLine } from './Section.elements'

function Section({lightBg, imgStart, lightTopLine, topLine, lightText, headLine, lightTextDesc, description, img, start, alt}) {
    return (
        <>
        <Sec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='sign-up'>
                                <CartIcon />
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </Sec>
            
        </>
    )
}

export default Section;
