
export const Search = (query, name) => {
    if (!query) {
      return name;
    } else {
        alert("asd")
      return name.filter((d) => d.toLowerCase().includes(query));
    }
  };
  