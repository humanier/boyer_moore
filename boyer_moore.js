exports.indexOf = function (sub, str) {
    let curr_pos = 0;
    let lenSub = sub.length;
    let lenStr = str.length;    

    for (;curr_pos <= lenStr - lenSub;) {

        // mcc == matching chars number
        mcn = getMatchCharsNumber(sub, lenSub, str, lenStr, curr_pos);
        
        if (mcn === lenSub) {            
            return curr_pos;
        }

        curr_pos += lenSub;
    }

    return -1;
}

function getMatchCharsNumber(str1, lenStr1, str2, lenStr2, startIdx) {
    if (startIdx < 0) {
        throw RangeError('start index is negative');
    }

    if (startIdx > lenStr2) {
        throw RangeError('start index is bigger than target string length');
    }

    if (startIdx + lenStr1 > lenStr2) {
        throw RangeError('matched string is longer then searched part of target string');
    }

    let i=0;
    for (;i < lenStr1; i++) {
        if (str1[i] !== str2[i + startIdx]) {
            break;
        }
    }

    // return number of matching characters at position <startIdx>
    return i;
}