export function findArrayValue(arr, localValue){
    try {
       let resp = arr.find((v) => v.value == localValue);
       return resp
    } catch (error) {
      console.error(error);
    }
  }

export async function findArrayRowUnit(arr, localValue ){
    try {
       let resp =  arr.find((v) => v.charge_id == localValue);
       let res = resp
       return res
    } catch (error) {
      console.error(error);
    }
  }

export async function findArrayRowName(arr, localValue ){
    try {
       let resp =  arr.find((v) => v.charge_id == localValue);
       let res = resp
       return res
    } catch (error) {
      console.error(error);
    }
  }