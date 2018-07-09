import React from "react";

export class ToolsCalc extends React.Component{
    static getColor(valueMagRichter){
        let nilaiFinal = valueMagRichter;
        
        if(nilaiFinal>10) {
            nilaiFinal = 10;
        }
    
        const value = nilaiFinal/10;
        //value from 0 to 1
        var hue=((1-value)*120).toString(10);
        return ["hsl(",hue,",100%,50%)"].join("");
    }
    static getRadius(magnitude){
    return Math.sqrt(Math.sqrt(magnitude)) * 200000;
    }
}

