import { ScrollView } from "react-native";
import Cake from "./Cake";
import { useEffect , useState} from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCaksThunk } from "./reduxstore/thunks";

function Cakelist(props){

    useEffect(()=>{
       props.dispatch(getCaksThunk())
    },[])
    return (
        <ScrollView>
            {props.cakes.map((each,index)=>{
                    return <Cake {...props} data={each} key={index} />
            })}
        </ScrollView>
    )
}

export default connect(function(state,props){
    return {
        cakes : state["cakes"] || []
    }
})( Cakelist)