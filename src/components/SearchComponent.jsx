import React, { useEffect, useState } from "react";

const SearchComponent = () => {
  //setear los hooks
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //funcion para traer los datos de la API o arreglo
  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  
  
  
  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
  //metodo Filtrado
  const result = !search ? users : users.filter(dato => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))




  //renderizar la vista

  return (
    <div>
      <input onChange={searcher} value={search} type="text" placeholder="Buscar colaborador" className="form-control" />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {result.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
