import React from 'react'
import "./notfound.scss"
import Heading from '../../components/heading'
import Container from '../../components/container'
import Params from '../../components/params'

export default function NotFound() {
    return (
        <main className='NotFound'>
            <Container>
                <Heading heading={"h2"}>404</Heading>
            </Container>

            <Params />
        </main>
    )
}
