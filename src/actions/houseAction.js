import * as userApi from '../api/UserRequest'
export const updateHouse = (id, houseData)=> async(dispatch) => {
    dispatch({type: "UPDATING_START"})
    try{
        const {data} = await userApi.updateHouse(id, houseData);
        dispatch({type: "UPDATING_SUCCESS", data: data})
    }
    catch(error){
        dispatch({type: "UPDATING_FAIL"})
    }
}