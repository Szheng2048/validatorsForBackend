

/**
 * Checks if a given string is empty.
 */
function isEmpty(str) {
    return str.length === 0
}

/**
 * Checks if a given string meets the criteria of a strong password.
 */
function isStrongPassword(password) {
    // Implementation here
    if(password.length >= 8&&password.toLowerCase()!==password){
        const testStr = `'!@#$%^&*()-,.?><"`
        for(let char of password){
            if(testStr.indexOf(char)!== -1){
                return true
            }
        } return false
    } else {
        return false
    }
}

/**
 * Checks if a given string is a valid email address.
 */
function isEmail(email) {
    if(email.indexOf(".com")!== -1 && email.indexOf("@")!== -1 && email.length >=7){
        return true
    } else {
        return false
    }
    // Implementation here
}

/**
 * Checks if a given string contains only alphabetic characters.
*/
function isAlpha(str) {
    // Implementation here
    const testStr = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    for(let char of str){
        if(testStr.indexOf(char)===-1){
            return false
        }
    } return true
}

/**
 * Checks if a given string contains only alphanumeric characters.
 */
function isAlphanumeric(str) {
    // Implementation here
    const testStr = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    for(let char of str){
        if(testStr.indexOf(char)===-1){
            return false
        }
    } return true
}

module.exports = {
    isEmail,
    isEmpty,
    isAlpha,
    isAlphanumeric, 
    isStrongPassword
}