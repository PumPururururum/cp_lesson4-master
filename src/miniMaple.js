class MiniMaple{

 difTerm(term, variable) {
    const termMatch = term.match(/([+-]?\d*)\*?([a-z])\^?(\d*)/);

    let [, coefficient, termVariable, power] = termMatch;
    coefficient = coefficient === "" || coefficient === "+" ? 1 : coefficient === "-" ? -1 : parseInt(coefficient);
    power = power === "" ? 1 : parseInt(power);

    if (termVariable !== variable) {
      return '0'; 
    }

    if (power === 0) {
      return '0'; 
    }


    const newCoefficient = coefficient * power;
    const newPower = power - 1;
    if (newPower === 1){
      return  `${newCoefficient}*${variable}`;
    }
    else
      return newPower === 0 ? `${newCoefficient}` : `${newCoefficient}*${variable}^${newPower}`;
}
difPolynom(polynom, variable) {
  if (!this.isValidExpression(polynom)){
    return "Invalid expression"
  }
  if (/^\d+$/.test(polynom.trim())){
    return "0"
  }

    const terms = polynom.match(/[+-]?\d*\*?[a-z]\^?\d*/g);
    /* if (!terms) {
      return "Invalid expression"
    } */

    const diffedTerms = terms.map(term => this.difTerm(term, variable));
    return diffedTerms.join('');
  }

isValidExpression(expression){
  const regex =/^[0-9a-z\+\-\*\^\s]*$/i;
  return regex.test(expression);
}
    
}
export {MiniMaple}