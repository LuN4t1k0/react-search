import React, { useEffect, useState } from "react";

const SearchComponent = () => {
  //setear los hooks
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")

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
    setSearch(e.target.value);
    console.log(search);
  };
  
  //prueba de ingreso 
  // setUsers([...users, {name, email}])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...users, {id: users.length +1, name, email}])
    setName("")
    setEmail("")


  }
  
  //metodo Filtrado
  const result = !search
  ? users
  : users.filter((dato) =>
  dato.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  
  //metodo captura input
  const handleKey = (e) => {
    e.target.id === "name" ? setName(e.target.value) : setEmail(e.target.value);
  };

  //renderizar la vista

  return (
    <div>
      <input
        onChange={searcher}
        value={search}
        type="text"
        placeholder="Buscar colaborador"
        className="form-control"
      />
      <hr />
      <div>
        <input
        onChange={handleKey}
        value={name}
          type="text"
          id="name"
          className="form-control mt-4"
          placeholder="Ingresar Nombre"
        />
        <input
        onChange={handleKey}
        value={email}
          type="email"
          id="email"
          className="form-control mt-4"
          placeholder="ingrese email"
        />
        <button onClick={handleSubmit} className="form-control mt-5 btn btn-success col-md-6">
          agregar
        </button>
      </div>
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
