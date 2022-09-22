const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    const x = productDetails('a', 'b');
    expect(Array.isArray(x)).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(x)).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    for (let i = 0; i < x.length; i += 1) {
      if(typeof x[i] !== 'object') {expect(typeof x[i]).toBeUndefined;} else {expect(typeof x[i]).toBe('object');}
    }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(x[0]).not.toMatchObject(x[1])
    // Teste se os dois productIds terminam com 123.
    for (let i = 0; i < 2; i += 1) {
      expect(x[i].details.productId.endsWith('123')).toBe(true)
    }
  });
});
