var bilGets = {shirt: true, shirtColor: "Off white", smile: true, sweater: true, sweaterColor: 'gray' };

console.log(bilGets.shirtColor);
console.log(bilGets['sweaterColor']);

var bilGetsPro = {
    shirt: {
        color: 'Off White',
        quality: 'good',
        price: 1200,
    },
    sweater: {
        color: 'gray',
        quality: 'Best',
        price: '3000 TK',
        warm: 'Best',
    },
    face: {
        smiling: true,
        chosma : true,
        teeth: 'big white'
    }
}

console.log(bilGetsPro.face.teeth);
console.log(bilGetsPro['shirt']['price']);