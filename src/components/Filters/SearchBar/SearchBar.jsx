export const SearchBar = ({keyword, onHandleSearch}) => {

    return (
        <>
            <p>Search</p>
            <input type="text" value={keyword} placeholder="Search Param" onChange={onHandleSearch} />
        </>
    )
}