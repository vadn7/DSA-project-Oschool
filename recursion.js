function factoriel(n){

if(n<0) return "ERROR"

if(n===0||n===1)return 1;

return n*factoriel(n-1);

}

module.exports=factoriel;