import React, {useState, useEffect}  from 'react'
import  axios  from 'axios'
import {DataGrid}from '@material-ui/data-grid'
import Genre from '../genre/Genre'
import genreID from '../../key/genreID'
import Error from '../errors/Error'
import Loadings from '../loading/Loadings'





const columns = [
    
  {field:'title', headerName: 'Title', width: 230},
  {field:'release_date', headerName: 'release', width: 130},
  {field:'vote_average', headerName: 'vote', width: 110},
  {field:'original_title', headerName: 'original', width: 230},
  {field:'popularity', headerName: 'popularity', width: 150},
  {field:'overview', headerName: 'description', width: 800},
]



const Movie = () => {
    const [movies,setMovies] = useState([]);
    const [page,setPage] = useState(9);
    const [loading , setLoading] = useState(true);
    const [IsErr , setIsErr] = useState(false);
    const [genre, setGenre] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const ids = genreID(selectedGenres);


    const getMovie =async () => {
       try {
           const {data} = await axios.get(
             `https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}&with_genres=${ids}`);
           setMovies(data?.results);
           setLoading(false);
         
       } catch (error) {
          
           setIsErr(true);
       } 
    };

    useEffect(() => {
        getMovie();
    }, [page, selectedGenres]);
    
  return (
  <>
   {loading ? (
    <Loadings />
   ) : IsErr ? (
    <Error />
   ) : (
     <>

       <Genre
     genre = {genre} 
     setGenre= {setGenre} 
     selectedGenres={selectedGenres} 
     setSelectedGenres={setSelectedGenres} 
    />
      
    <div className="table" style={{height:700, width: '100%', marginTop:'50px'}}>
    <h3> All Movie</h3>
        <DataGrid rows={movies} columns={columns} pageSize={10} />
    </div>
     </>
   ) }
  </>

  
  )
}

export default Movie