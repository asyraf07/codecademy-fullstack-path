// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnaBases) => {
  return {
    specimenNum: num,
    dna: dnaBases,

    mutate() {
      let newBase = returnRandBase();
      const index = Math.floor(Math.random() * this.dna.length);
      while (newBase === this.dna[index]) {
        newBase = returnRandBase();
      }
      console.log(`Change the ${this.dna[index]} at ${index+1} location into ${newBase}`);
      this.dna[index] = newBase;
      return this.dna;
    },

    compareDNA(compareSpecimen) {
      let count = 0;
      for (i in compareSpecimen.dna) {
        if (compareSpecimen.dna[i] === this.dna[i]) count++;
      }
      const identicalPersen = Math.floor(100 * (count/this.dna.length));
      console.log(`specimen #1 and specimen #2 have ${identicalPersen}% DNA in common`);
    },

    willLikelySurvive() {
      let countC = 0;
      let countG = 0;
      for (i in this.dna) {
        if (this.dna[i] === 'C') countC++;
        else if (this.dna[i] === 'G') countG++;
      }
      const persentageC = Math.floor(100 * (countC/this.dna.length));
      const persentageG = Math.floor(100 * (countG/this.dna.length));
      console.log(`C: ${persentageC}%`);
      console.log(`G: ${persentageG}%`);
      const totalPersentage = persentageC + persentageG;
      if (totalPersentage >= 60) return true;
      return false;   
    }
  }
};

console.log('It Works!');

const species1 = pAequorFactory(1, mockUpStrand());
const species2 = pAequorFactory(2, mockUpStrand());

console.log(species1.dna);

species1.mutate();

console.log('====COMPARE====');

console.log(species1.dna);
console.log(species2.dna);

species1.compareDNA(species2);

console.log(`specimen #1 will likely survive? : ${species1.willLikelySurvive()}`);
console.log(`specimen #2 will likely survive? : ${species2.willLikelySurvive()}`);

console.log('30 specimen that will likely survive : ');
const pAequors = [];
let num = 0;
while (pAequors.length<30) {
  let specimen = pAequorFactory(++num, mockUpStrand());
  if (specimen.willLikelySurvive()) pAequors.push(specimen);
}

pAequors.forEach((x) => console.log(x.specimenNum));
// pAequors.forEach((x) => console.log(x.dna));