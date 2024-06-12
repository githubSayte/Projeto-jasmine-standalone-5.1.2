describe("Teste Calculadora", function()
{
    it("Somas válidas", function()
    {
    expect(soma(1,2)).toBe(3);
    expect(soma(9,9)).toBe(18);
    });

    it("Subtrações válidas", function()
    {
    expect(subtracao(3,1)).toBe(2);
    expect(subtracao(9,3)).toBe(6);
    });

    it("Multiplicações válidas", function()
    {
    expect(multiplicacao(3,1)).toBe(3);
    expect(multiplicacao(9,3)).toBe(27);
    });

    it("Divisões válidas", function()
    {
    expect(divisao(3,1)).toBe(3);
    expect(divisao(9,3)).toBe(3);
    });

});
