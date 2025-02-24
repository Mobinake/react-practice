const nombre = 'Fernando';
const apellido = 'Caneza';
const nombreCompleto = `
${nombre}
${apellido}
2
`;

console.log(nombreCompleto);

function saludo(apellido) {
	return 'saludos ' + apellido;
}

console.log(`${saludo(apellido)}`);
