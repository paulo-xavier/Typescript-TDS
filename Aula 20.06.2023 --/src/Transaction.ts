export class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor (description: string, value: number, date: string) { //description, value and date are attributes
        this.description = description;
        this.value = value;
        this.date = date;
    }

    // get

    getDescription():string {
        return this.description;
    }

    getValues(): number {
        return this.value;
    }

    getDate(): string {
        return this.date;
    }


    // set

    setDescription(description: string): void{
        this.description = description;
        console.log(this.description)
    }


    

    setValue(value:number):void{
        this.value = value;
          console.log(this.value)
    } 

    setDate (date: string): void {
        this.date = date;
        console.log(this.date)
    }

    
}