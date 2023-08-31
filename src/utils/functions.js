export function findArrayValue1(arr, localValue){
    try {
       let resp = arr.find((v) => v.value == localValue);
       return resp
    } catch (error) {
      console.error(error);
    }
  }

export async function findArrayRowUnit1(arr, localValue ){
    try {
       let resp =  arr.find((v) => v.charge_id == localValue);
       let res = resp
       return res
    } catch (error) {
      console.error(error);
    }
  }

export async function findArrayRowName1(arr, localValue ){
    try {
       let resp =  arr.find((v) => v.charge_id == localValue);
       let res = resp
       return res
    } catch (error) {
      console.error(error);
    }
  }

  export  async function findArrayValue(arr, localValue) {
    try {
        return arr.find((v) => v.value == localValue);
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it further up the call stack
    }
}

export async function findArrayRowUnit(arr, localValue) {
    try {
        return arr.find((v) => v.charge_id == localValue);
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it further up the call stack
    }
}

export async function findArrayRowName(arr, localValue) {
    try {
        return arr.find((v) => v.charge_id == localValue);
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it further up the call stack
    }
}