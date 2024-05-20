function solution(polynomial) {
    let terms = polynomial.split(' + ');

    let xTermCoeff = 0;
    let constantTerm = 0;

    terms.forEach(term => {
        if (term.includes('x')) {
            let coefficient = term.replace('x', '');
            if (coefficient === '') {
                coefficient = 1; 
            } else {
                coefficient = parseInt(coefficient);
            }
            xTermCoeff += coefficient;
        } else {
            constantTerm += parseInt(term);
        }
    });

    let result = [];
    if (xTermCoeff === 1) {
        result.push('x');
    } else if (xTermCoeff !== 0) {
        result.push(xTermCoeff + 'x');
    }
    if (constantTerm !== 0) {
        result.push(constantTerm);
    }

    return result.join(' + ');
}