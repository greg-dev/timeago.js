var i,t,l = 'sekundę,sekund,minutę,minut,godzinę,godzin,dzień,dni,tydzień,tygodni,miesiąc,miesięcy,rok,lat,sekundy,minuty,godziny,dni,tygodnie,miesiące,lata'.split(',');
// convert different forms of unit names into an array of ['%s units ago', 'in %s units'] arrays accordingly:
// 0-13 alternately: single unit of time,
// genitive plural form for all other numbers excluding cases below:
// 14-20: nominative plural form for the numbers 2,3,4 
// and all other numbers higher than 21 which end in 2,3,4
for(i in l) l[i] = (t = (i&1||i>12?'%s ':'1 ')+l[i], [t+' temu','za '+t]);
// apply optional custom forms
l[0] = ['w tej chwili','za chwilę'];
// l[6] = ['wczoraj','jutro'];

module.exports = function(number, index) {
  // to determine which plural form must be used check the last 2 digits
  // and calculate new index value to get the nominative form (14-20)
  // for all other cases use index value as it is (0-13)
  return l[index&1?(number%10>4||number%10<2||1===~~(number/10)%10?index:++index/2+13):index];
};
