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
}

const myNewHash = new HashTable(50);
myNewHash.set('grapes',1000);
myNewHash.get('grapes')