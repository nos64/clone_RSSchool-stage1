
const getData = () => {
  return fetch('../../assets/db/pets.json').then(response => response.json());
};

export default getData;