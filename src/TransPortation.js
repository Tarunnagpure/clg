import React from "react";
import SideNav from "./component/SideNav";

const TransPortation =() => {
    return (
        
        <div className="d-flex">
            <SideNav/>
            <div className="col-sm-3 bg-primary me-3 p-3">Primary
            
            </div>
            <div className="col-sm-3 bg-info me-3 p-3">Senior secondary</div>
            <div className="col-sm-3 bg-secondary  p-3">Higher secondary</div>

        </div>
        
    )
}
 export default TransPortation;