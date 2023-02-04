import * as convert from "color-convert";

export const generatePalette = (hex) => {
  // crée un tableau vide.
  const colors = [];

  // converti le hex d'entrée en tableau hsl. Ne récupérer que les
  // deux premières valeurs.
  const [h, s] = convert.hex.hsl(hex);

  // Itère entre 0 et 100 par intervalle de 10
  for (let i = 0; i <= 100; i += 10) {
    // À chaque itération, pousse un nouveau tableau dans colors contenant
    // la teinte (fixe), la saturation (fixe) et la luminosité déterminée par
    // l'index de la boucle.
    colors.push([h, s, i]);
  }

  // Retourne le tableau.
  return colors;
};

export const hexToCSSHSL = (hex) => {
  // tranforme le hex d'entrée en HSL.
  const hsl = convert.hex.hsl(hex);
  // Retourne une chaîne de caractère au format css.
  return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;
};

export const isHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);




/*

import * as colorConvert from "color-convert";

export const generatePalette = (hex) => {
// crée un tableau vide
    const couleursHsl = [];
    // convertira hexadécimal en hsl
    const color = colorConvert.hex.hsl(hex);
    //dire que on touche que à la dernière case du tableau (index 2)
    const couleurFin = color[2];
    const h = color[0];
    const s = color[1];
    //voir si sa marche bien, regarder dans la console
    console.log(couleurFin);
    //boucle for pour changer la valeur a l'index 2 
    for (let i = 0; i <= couleurFin; i += 10) {
        // À chaque itération, pousse un nouveau tableau dans colors contenant
    // la teinte (fixe), la saturation (fixe) et la luminosité déterminée par
    // l'index de la boucle.
        const newCouleur = [h, s, i]
        couleursHsl.push(newCouleur);
    }
    //pour regarder si sa marche
    console.log(couleursHsl);

    return couleursHsl;
  
}
export const hexToCSSHSL = (hex) => {
    // tranforme le hex d'entrée en HSL.
    const hsl = convert.hex.hsl(hex);
    // Retourne une chaîne de caractère au format css.
    return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;
  };

export const isHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);


*/


                        