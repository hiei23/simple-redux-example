export function selectBook(book){
    //select is an action creator, it needs to return an action,
    //an objectwith a type property
    return{
        type:'BOOK_SELECTED',
        payload: book
    };
}