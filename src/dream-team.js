module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) && members.length > 0) {
    let str = '';
    members.forEach(element => {
    if (typeof(element) == 'string'){
      element = element.replace(/\s+/g,'');
      return str += element[0].toUpperCase();
    }    
    });
    return str.split('').sort().join('');    
  }
  return false;
};