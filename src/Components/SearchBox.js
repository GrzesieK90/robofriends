import React from 'react';

const SearchBox = ({searchfield, srchChng}) => {
    return (
        <div className='pa2'>
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='Search' 
        placeholder='Search Robot'
        onChange={srchChng}
        />
        </div>
    )
}

export default SearchBox