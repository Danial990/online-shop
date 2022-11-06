
import axios from "axios";


async function fetchAllProducts() {
    return await axios.get('https://fakestoreapi.com/products')
        .then(response => response.data)
}
async function fetchDataElectronics() {
    return await axios.get('https://fakestoreapi.com/products/category/electronics?limits=10')
        .then(response => response.data)
}

async function fetchDataJewelery() {
    return await axios.get('https://fakestoreapi.com/products/category/jewelery?limits=10')
        .then(response => response.data)
}
async function fetchDataMens() {
    return await axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
        .then(response => response.data)
}
async function fetchDataWomens() {
    return await axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
        .then(response => response.data)
}

export { fetchDataElectronics, fetchDataJewelery,fetchDataMens,fetchDataWomens,fetchAllProducts };