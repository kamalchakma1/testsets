function addFun(a,b,c)
{
    let final=[];
    let result=a[c]+b[c];
    final.push(result);

    return final;
     
}
let a=[1,2,3,4,5,7,8,0];
let b=[29,39,0,92,7,8];
let ans =addFun(a,b,4);

console.log(ans);