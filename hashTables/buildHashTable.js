class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i= 0; i < key.length ; i++){
            hash = ((hash + key.charCodeAt(i))*i)%this.data.length;
        }
        return hash;
    }

    set(key,value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket.length){
            for (let i =0 ; i < currentBucket.length;i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys(){
        if(!this.data.length){
            return undefined;
        }
        let result = [];
        for(let i = 0; i<this.data.length; i++){
            if(this.data[i] && this.data[i].length){
                if(this.data.length > 1){
                    for(let j= 0 ; j < this.data[i].length ; j++){
                        result.push(this.data[i][j][0]);
                    }
                }else{
                    result.push(this.data[i][0]);
                }
                
            }
        }
        return result;
    }
}

const myNewHash = new HashTable(3);
myNewHash.set('grapes',1000);
myNewHash.set('peach',2);
myNewHash.set('cramberries',400);
myNewHash.set('oranges',200);
myNewHash.set('apples',10);
console.log(myNewHash.get('grapes'));
console.log(myNewHash.keys());