const BASEURL="http://localhost:5000"

const fetcher=async (url)=>{
let responseObject={
    erorMassege:"",
    data:[]
}
try{
  const response= await fetch(BASEURL+url)
  if(!response.ok){
    throw new Error(`HTTP EROR ${response.status}`)
  }
  const responseData= await response.json()
  responseObject.erorMassege=""
  responseObject.data=responseData
//   return responseData
}
catch(err){
responseObject.erorMassege=err.message;
}
return responseObject
}

export const getCatgories=()=>{
    return fetcher("/categories")
}

export const getProduct = id=>{
    return fetcher("/products?catId="+id)
}