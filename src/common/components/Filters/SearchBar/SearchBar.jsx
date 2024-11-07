import { useState } from "react"

export const SearchBar = () => {
    
    const [keyword, setKeyword] = useState("")
    
    const handleSearch = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <p>Search</p>
            <input type="text" value={keyword} placeholder="Search Param" onChange={handleSearch} />
        </>
    )
}