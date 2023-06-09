const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios(URL + id);
        const { status, name, species, origin, image, gender } = response.data;
        const character = {
            id,
            status,
            name,
            species,
            origin,
            image,
            gender
        }
        return name
            ? res.status(200).json(character)
            : res.status(404).send('Not found')
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// * PROMISE VERSION
// module.exports = (req, res) => {
//     const { id } = req.params;

//     axios(URL + id)
//     .then(response => response.data)
//     .then(({ status, name, species, origin, image, gender }) => {
//         const character = {
//             id,
//             status,
//             name,
//             species,
//             origin,
//             image,
//             gender
//         }
//         return name
//             ? res.status(200).json(character)
//             : res.status(404).send('Not found')
//     })
//     .catch(error => res.status(500).send(error.message));
// };