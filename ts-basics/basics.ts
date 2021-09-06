// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;

let userName: string;
userName = 'Quang';

let indicator: boolean;
indicator = true;

//let hobbies: null;
// hobbies = 12; invalid

//More complex types
let hobbies: string[]
hobbies = ['Sport', 'Cooking']

let person: {
    name: string,
    age: number
};
person = {
    name: 'Quang',
    age: 25
};

// not valid
// person = {
//     isEmployee: true
// }

// array of object
let people: {
    name: string,
    age: number
} [];

//Type inference
let course = 'React - The complete Guide';
//course = 1234; invalid

//UNION TYPES
let course1: string | number = 'React - The complete Guide';
course1 = 123 // valid

//TYPE ALIAS
type Person = {
    name: string,
    age: number
};
let a: Person;
let b: Person[];

// Functions and types
function add(a: number, b: number): number {
    return a + b
}

//GENERICS
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array]
    return newArray
}
const demoArray: number[] = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1)

const stringArray: string[] = ['a', 'b', 'c']
const updatedStringArray = insertAtBeginning<string>(stringArray, 'd')