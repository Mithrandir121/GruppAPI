
document.getElementById("searchForm")?.addEventListener("submit",async (e)=>{
  e.preventDefault();

  const theInput=document.getElementById("searchText");

  let searchText="";
  if (theInput){
    searchText=(theInput as HTMLInputElement).value;
  }



  (document.getElementById("searchText")as HTMLInputElement).value="";
}); 