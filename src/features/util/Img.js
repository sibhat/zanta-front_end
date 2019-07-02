import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

export default  class extends Component {
    static propTypes = {
        src: PropTypes.string,
        background: PropTypes.string,
        alt: PropTypes.string,
        className: PropTypes.string,
        maxWidth: PropTypes.string,
    };
    styles = () => ({
        imgContent:{
            
            "background-color" : this.props.backgroundColor,
            "max-width": this.props.maxWidth,
            "height" : this.props.height || "auto",
            "margin": "auto",
            // "transform": "scale(2)"
        },
        divContent:{
            "background-color" : this.props.backgroundColor,
            "background-image": `radial-gradient(circle at 23%, #00000075, #ffffff26), url(${this.props.background})`,
            "background-size": "cover",
            "background-position": "center", /* Center the image */
            "background-repeat": "no-repeat", /* Do not repeat the image */
            "width": this.props.width || "100vw",
            "height": this.props.height ||"100vh",
        }
    });
    div = classesObj => {
        // let {src, alt} = this.props;
        let {classes:{divContent}} = classesObj;
        return <div className={this.props.className + " " + divContent || 'img_bg'}/>
    };
    img = classesObj => {
        let {src, alt} = this.props;
        let {classes:{imgContent}} = classesObj;
        return <img src={src} alt={alt || "landing page"} className={`${imgContent} ${this.props.className}` || 'img'}/>
    };

    StyledImg = withStyles(this.styles)(this.img);
    StyledDiv = withStyles(this.styles)(this.div);
    
    render() {
        return this.props.src ? 
            <this.StyledImg/> : <this.StyledDiv/>
    }
};




// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// function isHill(p=null, q=null, arry){
//     let end = false;
//     let a = arry;
//     if(q && q < arry.length -1){
//         if(a[q + 1] < a[q]){
//             end = true
//         }
//     }else if(p && p > 0) {
//         if(a[p - 1] < a[p]){
//             end = true
//         }
//     }
//     return end;
// }
// function isVally(p=null,q=null,arry){
//     let end = false;
//     let a = arry;
//
//     if(q && q < arry.length -1){
//         if(a[q + 1] > a[q]){
//             end = true
//         }
//     }else if(p && p > 0) {
//         if(a[p - 1] > a[p]){
//             end = true
//         }
//     }
//     return end;
// }
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let p=0, q;
//     let resultArr = [];
//     let newResult = [];
//     let start = true;
//     let end = false;
//     let a = A;
//     let currCon = []
//     //loop the array
//     for(let i = 0; i < A.length; i++){
//         //check the terrain hieght of each segment from p to q is same by
//         if(currCon.length === 0){
//             currCon.push(i)
//         }else{
//             if(a[i] === a[currCon[currCon.length - 1]]){
//                 currCon.push(i)
//             }else {
//                 resultArr.push(currCon);
//                 currCon = new Array();
//                 currCon.push(i)
//             }
//         }
//     }
//
//     for(let i = 0; i < resultArr.length; i++){
//         let currIndex = resultArr[i];
//         if(i === 0){
//             if(
//                 isHill(null, currIndex[currIndex.length - 1], A) ||
//                 isVally(currIndex[0], null, A)
//             ){
//                 newResult.push(currIndex);
//             }
//         }else if(
//             isHill(null, currIndex[currIndex.length - 1], A) &&
//             isVally(currIndex[0], null, A)
//         ){
//             newResult.push(currIndex);
//         }
//
//     }
//     return newResult.length
// }


