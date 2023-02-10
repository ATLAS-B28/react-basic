//to have all the opeartions of crud
//we don't need the response from the server back cause
//as we are updating the state of the app with set functions
//that does not update the api
//we want to keep the state and api in-sync but update the state the faster 
//then the api 
//and error message occurs only when the 2 are not in-sync
const apiRequest = async (url='',optionsObj=null,errMsg=null)=>{
 try{
  const res = await fetch(url,optionsObj)//optionsObj is what makes the difference between the 
  //create ,update and delete
  if(!res.ok) throw Error('Please reload the app')
 }catch(err){
    errMsg = err.message
 }finally{
  return errMsg //this will happen whether the error is there or not
 }
}
export default apiRequest