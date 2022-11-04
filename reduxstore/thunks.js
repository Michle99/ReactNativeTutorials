import axios from "axios"

export function getCaksThunk(){
    return function(dispatch){
        axios({
            method:"get",
            url:"https://apifromashu.herokuapp.com/api/allcakes"
        }).then((response)=>{
            console.log("responsefrom asll cakes api" , response.data)
            dispatch({
                type:"GET_CAKES",
                payload:response.data.data
            })
        })
    }
}