// Завдання 1

function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

// Завдання 2

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">,
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Завдання 3

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

// Завдання 4

interface PageProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

// Завдання 5

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Завдання 6

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): void {
  console.log(initialValues);
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

// Завдання 7

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

// Завдання 8

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

export {};
