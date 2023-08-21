export function findArrayValue(arr, localValue){
    try {
       let resp = arr.find((v) => v.value == localValue);
       return resp.label
    } catch (error) {
      console.error(error);
    }
  }