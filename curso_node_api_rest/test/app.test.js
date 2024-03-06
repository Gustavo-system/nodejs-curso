describe("[APP] Esta es la prueba general", () => {

	test('Primera prueba unitaria demo, el resultado de esta suma debe ser 8', () => {
		const numeroUno = 4
		const numeroDos = 4
		const totalSuma = numeroUno + numeroDos

		expect(totalSuma).toEqual(8)
	})

})