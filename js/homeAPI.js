export const loadCard = async () => {
    const url = `http://localhost:8080/v1/lion-school/cursos`
    const response = await fetch(url)
    const card = await response.json()

    return card
}

export const showAlunos = async () => {
    const url = `http://localhost:8080/v1/lion-school/alunos`
    const response = await fetch(url)
    const alunos = await response.json()

    return alunos

}

// export const showAlunosStatus = async () => {
//     const url = `http://localhost:8080/v1/lion-school/alunus`
//     const response = await fetch(url)
//     const alunosStatus = await response.json()

//     return alunosStatus
// }

export const showAlunosCurso = async (curso) => {
    const url = `http://localhost:8080/v1/lion-school/alunes?curso=DS`
    const response = await fetch(url)
    const alunosCurso = await response.json()

    return alunosCurso
}