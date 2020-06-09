import  selfRequest  from './selfRequest.js'

export function getCategory(){
  return selfRequest({
    url: "/category"
  });
}

export function getSubcategory(data){
  return selfRequest({
    url: "/subcategory",
    data
  });
}