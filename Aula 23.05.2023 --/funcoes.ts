

function sum(a: number, b:number): number{
    return a + b
}

sum(3 , 2)


function darOi(nome?: string): void{
    console.log("Olá ", nome || "mundo")
}

darOi()
darOi("edison")