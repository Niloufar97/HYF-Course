const List = ({list, item}) => {
    return ( <ul>
        {list.map(i =><li key={i.id}>{item(i)}</li>)}
    </ul> );
}
 
export default List;