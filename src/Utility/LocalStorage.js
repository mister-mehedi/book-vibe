const getStoredBookApplication = () =>{
  const storedBookApplication=localStorage.getItem('book-applications');
  if(storedBookApplication){
    return JSON.parse(storedBookApplication);
  }
  return [];
}

const saveBookApplication = id =>{
  const storedBookApplication=getStoredBookApplication();
  const exists=storedBookApplication.find(bookId=> bookId===id);
  if(!exists){
    storedBookApplication.push(id);
    localStorage.setItem('book-applications', JSON.stringify(storedBookApplication))
  }
}
const isRead=id=>{
  const storedBookApplication=getStoredBookApplication();
  const exists=storedBookApplication.find(bookId=> bookId===id);
  if(exists){
    return true;
  }
  return false;
}

const getWishlist = () =>{
  const storedWishlist=localStorage.getItem('wishlist-applications');
  if(storedWishlist){
    return JSON.parse(storedWishlist);
  }
  return [];
}

const saveWishlist = id =>{
  const storedWishlist=getWishlist();
  const exists=storedWishlist.find(bookId=> bookId===id);
  if(!exists){
    storedWishlist.push(id);
    localStorage.setItem('wishlist-applications', JSON.stringify(storedWishlist))
  }
}

const removeWishlist=id=>{
  const storedWishlist=getWishlist();
  const exists=storedWishlist.find(bookId=> bookId===id);
  if(exists){
    const newStoredWishlist= storedWishlist.filter(bookId=> bookId!==id);
    localStorage.setItem('wishlist-applications', JSON.stringify(newStoredWishlist))
  }
}

const isWishlist=id=>{
  const storedWishlist=getWishlist();
  const exists=storedWishlist.find(bookId=> bookId===id);
  if(exists){
    return true;
  }
  return false;
}

export {getStoredBookApplication, saveBookApplication, isRead, getWishlist, saveWishlist, removeWishlist, isWishlist}