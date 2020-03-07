function changeVocals (str) {
    var vocal = 'aiueoAIUEO';
    var repVocal = 'bjvfpBJVFP';
    var temp = '';
    for(i = 0; i < str.length; i++){
        var flag = false;
        for(j = 0; j < vocal.length; j++){
            if(str[i] == vocal[j]){
                flag = true;
                temp += repVocal[j];
                break;
            }
        }
        if(!flag){
            temp += str[i];
        }
    }
    return temp;
}

function reverseWord (str) {
    var result = '';
    for(i = str.length - 1; i >=0; i--){
        result+= str[i];
    }
    return result;
}

function setLowerUpperCase (str) {
    var result = '';
    for(i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            result += str[i].toLowerCase();
        }
        else if(str[i] == str[i].toLowerCase()){
            result += str[i].toUpperCase();
        }
    }
    return result
}

function removeSpaces (str) {
    var result = '';
    for(i = 0; i < str.length; i++){
        if(str[i] != ' '){
            result+= str[i];
        }
    }
    return result;
}

function passwordGenerator (name) {
    if(name.length < 5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    var vocalChange = changeVocals(name);
    var wordReversed = reverseWord(vocalChange);
    var changeWordCase = setLowerUpperCase(wordReversed);
    var spaceRemoved = removeSpaces(changeWordCase);
    return spaceRemoved;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter 