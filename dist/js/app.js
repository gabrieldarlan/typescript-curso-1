import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 1, 10);
console.log(negociacao.volume);
