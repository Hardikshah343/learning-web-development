interface Demo {
    name: string;
    age: number;
};

function sumOfAge(demo1: Demo, demo2: Demo): number {
    return demo1.age + demo2.age;
}

const age = sumOfAge({name: "Taro", age: 20}, {name: "Jiro", age:30});
console.log(age)

interface User {
    id: number;
    name: string;
    email: string;
    createdAt: number;
}

// For a profile display, only pick 'name' and 'email'
type UserProfile = Pick<User, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name} and Email: ${user.email}`);
};

displayUserProfile({name:"Hello", email:"hello@example.com"});

type UserProfileOptional = Partial<User>;

function UpdateUser(user: UserProfileOptional) {
    // Do something
}
UpdateUser({name:"Hello"});

interface Config {
    readonly endpoint: string;
    readonly apikey: string;
}

const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apikey: 'abcdefghi123'
};

type Users_wo_record = { [key: string]: User; }

const users_notok: Users_wo_record = {
    'abc123': { id: 123, name: 'John Doe', email: 'johndoe@example.com', createdAt: 112 },
    'xyz789': { id: 789, name: 'John Doe', email: 'johndoe@example.com', createdAt: 112 },
};

type Users_w_record = Record<string, User>

const users_ok: Users_wo_record = {
    'abc123': { id: 123, name: 'John Doe', email: 'johndoe@example.com', createdAt: 112 },
    'xyz789': { id: 789, name: 'John Doe', email: 'johndoe@example.com', createdAt: 112 },
};

// config.apikey = 'Newkey'; // Error: cannot assign to `apikey` because it is a readonly


type EventX = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventX, 'scroll'>; // allowed 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click');  // Ok
// handleEvent('scroll'); // not ok