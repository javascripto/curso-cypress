/// <reference types="cypress" />

describe('should show some assertions', () => {
  it.skip('should skip trow an error', () => {
    // o segunto argmento da função expect recebe um texto para deixar o erro mais claro
    expect(Calculator.sum(1, 2, 3), 'deveria ser seis').equals(6);
  });

  it('should show some basic assertions', () => {
    expect(1 + 2).eq(3);
    expect(1 + 2).eql(3);
    expect(1 + 2).equal(3);
    expect(1 + 2).equals(3);
    expect(1 + 2).to.equal(3);
    expect(1 + 2).to.be.equal(3);
    expect(1 + 2).not.to.be.equal(5);
    expect(1 + 2).to.be.not.equal(5);
    
    expect(true).true;
    expect(true).truthy;
    expect(!true).falsy;
    expect(true).to.be.true;
    expect(true).to.be.not.false;
    expect().to.be.undefined;

    for (const item of [undefined, 0, {}, []]) {
      expect(item).to.be.empty;
    }
  });
  
  it('should show some [Object] assetions', () => {
    expect({ prop: 1}).to.have.property('prop');
    expect({ prop: 1}).to.have.property('prop', 1);
    expect({ prop: 1}).to.not.be.equals({ prop: 1});
    expect({ prop: 1}).to.be.deep.equal({ prop: 1});
    expect({ prop1: 1, prop2: 2}).to.includes({ prop1: 1});
  });
  
  it('should show some [Array] assertions', () => {
    expect([]).to.be.empty;
    expect([1]).to.not.be.empty;
    expect([1, 2, 3, 4]).to.includes(3);
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).to.include.members([5, 7, 3]);
    expect([1, 2, 3]).to.have.members([1, 2, 3]); // array deep equal
  });

  it('should show some [Type] assertions', () => {
    expect(true).to.be.true;
    expect().to.be.undefined;
    expect(1).to.be.a.number;
    expect('').to.be.a.string;
    expect([]).to.be.an.array;
    expect({}).to.be.an.object;
    expect(true).to.be.boolean;
    expect(class {}).to.be.a.class;
    expect(() => {}).to.be.a.function;
    expect(new Object).to.be.instanceOf(Object);
  });

  it('should show some [String] assertions', () => {
    expect('string').to.have.length(6);
    expect('string').to.contain('str');
    expect('string').to.match(/^str/);
  });

  it('should show some [Number] assertions', () => {
    expect(Math.PI).to.be.closeTo(3.14, 0.01);

    expect(2).above(1).and.below(3);
    expect(2).greaterThan(1).and.lessThan(3);
  });
});
