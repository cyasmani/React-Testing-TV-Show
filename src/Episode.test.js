import React from 'react'
import Episodes from './components/Episodes'
import {render} from "@testing-library/react"

test("Tests episodes", () => {
    const {queryAllByTestId, getAllByTestId, rerender} = render(<Episodes episodes={[]}/>)

    const initialEpisode = queryAllByTestId(/episode/i)
    console.log(initialEpisode)
})

