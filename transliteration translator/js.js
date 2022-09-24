let rus = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ы','ь','ъ','э','ю','я'];
let transliter = ['a','b','v','g','d','e','e','zh','z','i','i','k','l','m','n','o','p','r','s','t','u','f','kh','ts','ch','sh','shch','y',' ','ie','e','iu','ia'];
let result = ""
function translit (str) {
    str = str.toLowerCase()
    let result = ""
    for (const key of str ){
        let num = rus.indexOf(key)
        if (key !== key.toLowerCase()){
            result +=transliter[num]
            result.toUpperCase()
            break
        }
        if (num === -1){
            result += key
            break
        }
        result += transliter[num]

        
    }
    return result
    
}