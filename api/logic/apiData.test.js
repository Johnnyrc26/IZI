import 'dotenv/config'
import apiData from './apiData.js'

const { API_VQ } = process.env


fetch(API_VQ)
  .then(() => {
    return apiData()
  })
  .then(data => {
    console.log('data retrieved')
  })
  .catch(error => {
    console.error('Error:', error);
  });