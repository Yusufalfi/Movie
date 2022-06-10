import React, {useState, useEffect} from 'react'

import axios from 'axios'
import {DataGrid}from '@material-ui/data-grid'



const columns = [
    
    {field:'id', headerName: 'ID', width: 230},
    {field:'name', headerName: 'Name', width: 130},
   
  ]

const Genre = ({genre, setGenre, selectedGenres, setSelectedGenres}) => {
  
   

    const getGenre = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49`
            );      
            setGenre(data?.genres);
        };

        useEffect(() =>{
            getGenre();
        },[] );

    const handleAddGenres = gen => {
        console.log(gen)
        setSelectedGenres([...selectedGenres, gen]);
        setGenre(genre?.filter(a => a?.id !==gen?.id))

    }

    
  return (
    <div>
        <h3> All Genre</h3>
        <hr />
      <div className="table" style={{height:700, width: '100%'}}>
      <DataGrid rows={genre} columns={columns}  />
       </div>
    </div>
  )
}

export default Genre
