import React, { useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/cards/Cards";
import Filter from "./components/filter/Filter";
import Pagination from './components/pagination/Pagination';
import Search from './components/search/Search';

function App() {
let [pageNumber, setPageNumber] = useState(1);//default page load will load to page one everytime the app loads up
let [search, setSearch] = useState(" ");

let [fetchedData, updateFetchedData] = useState('');
let {info, results} =fetchedData;

//pageNumber stays fixed at useState #1, and the setPageNumber changes when the users moves from page to page


let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;//Store the api link into a variable in temporal literals

useEffect(() => {
(async function(){
  let data = await fetch(api).then(res=>res.json());//On load-> it will load the first page and switch pages according to the api
  updateFetchedData(data);
})();

}, [api]);//This area is a watch(when you change pages, it runs the useEffect function again for fresh data

  return (
    <div className="App">
      <h1 className="text-center my-4 ubuntu">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>

      <Search  setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
