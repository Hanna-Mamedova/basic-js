const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 * +++ проверить members == массив
 * +++ получить каждый item
 * +++??? проверить item == string
 * whitespaces
 * +++ получить первую букву каждого item
 * +++ объединить в строку
 * +++ отсортировать строку в алфовитном порядке
 * +++ сделать upperCase
 * +++ вернуть res
 * 
 */
 function createDreamTeam(members) {

  if ((members instanceof Array)) {
  
    let res = members
    .filter(item => typeof item == 'string')
    .map(
      (item) => item.trim()[0].toUpperCase()
    ).sort().join('');
    
    return res;
  } else {
    return false;
  }

}

module.exports = {
  createDreamTeam
};
