exports.uniqueWordCount = function(str){
    if(str == null || str == ''){
        return 0;
    } else {
        let set = new Set(str.split(' '));
        return set.size;
    }
    
}
