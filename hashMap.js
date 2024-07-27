class HashMap {

    constructor(taille){
    
    this.taille=taille;
    
    this.buckets = Array(taille).fill(null).map(() => []);
    
    }
    
    
    hashMap(key) {
        return key.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0 ) % this.taille
    
    }
    set(key,value){
    const  index = this.hashMap(key);
    const bucket= this.buckets[index];
    
    //if (bucket.length===0) bucket=[];
    
    if(bucket===undefined) { bucket.push({key,value}); return "ADDED" }
    
    else { let existing = bucket.find(item => item.key===key );
    
    if(existing) { existing.value=value ; return "ADDED" }
    
    else{bucket.push({key,value}) ; return "ADDED" }
    
    }
    
    }
    
    
    get(key){
    
    const index=this.hashMap(key)
    
    const bucket=this.buckets[index]
    
    const found = bucket.find((item) => item.key===key );
    
    return found ? found : null;
    
    }
    
    delete(key){
    
    const index = this.hashMap(key);
    let bucket=this.buckets[index];
    
    const indexDelete = bucket.findIndex( item=> item.key===key )
    
    //return !existing ? null : existing.remove();
    
    return indexDelete !==-1 ? bucket=bucket.splice(indexDelete, 1) : "NOT FOUND NOT DELETED" ;
    
    }
    
    
    }
    
    module.exports=HashMap;
