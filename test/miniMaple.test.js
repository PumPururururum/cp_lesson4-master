import {MiniMaple} from "../src/miniMaple";

test('Single term x', () => {
    const miniMaple = new MiniMaple();
    expect(miniMaple.difPolynom("4*x^3", "x")).toBe("12*x^2")
});
test('Single term y', () => {
    const miniMaple = new MiniMaple();
    expect(miniMaple.difPolynom("4*x^3", "y")).toBe("0")
});
test('Polynom', () => {
    const miniMaple = new MiniMaple();
    expect(miniMaple.difPolynom("4*x^3-x^2", "x")).toBe("12*x^2-2*x")
});
test('Operation error', () => {
    const miniMaple = new MiniMaple();
    expect(miniMaple.difPolynom("4*x/3-x^2", "x")).toBe("Invalid expression")
});
test('Only constant', () => {
    const miniMaple = new MiniMaple();
    expect(miniMaple.difPolynom("4", "x")).toBe("0")
});
test('Term and constant', () => {
    const miniMaple = new MiniMaple();
    expect(miniMaple.difPolynom("4+2*x^2", "x")).toBe("4*x")
});
test('Power is zero', () => {
    const miniMaple = new MiniMaple();
    expect(miniMaple.difPolynom("4+2*x^0", "x")).toBe("0")
});
test('invalid term', () => {
    const miniMaple = new MiniMaple();
    expect(miniMaple.difPolynom("5*@x ", "x")).toBe("Invalid expression")
});
test('dif +x', () => {
    const miniMaple = new MiniMaple();
    expect(miniMaple.difPolynom("+x", "x")).toBe("1")
});