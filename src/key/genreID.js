import React from 'react'

const genreID = (selectedGenres) => {
    if(selectedGenres.length < 1) return '';

    const genresId = selectedGenres?.map(gens => gens?.id );

    return genresId?.reduce((acc, curr)=> acc + ',' + curr);
}

export default genreID