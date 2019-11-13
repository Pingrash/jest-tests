const functions = require('./functions');

// Use to run functions before and after each test.
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// Use to run functions before and after all tests are completed.
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () =>
//   console.log('Database initialised...');
// const closeDatabase = () =>
//   console.log('Database closed...');

const nameCheck = () => console.log('Checking name....');

// Use to run functions only for certain tests.
describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

/*
  CHECKING FOR TRUTHY OR FALSY VALUES:
  - toBeNull matches only null
  - toBeUndefined matches only undefined
  - toBeDefined is the opposite of toBeUndefined
  - toBeTruthy matches anything an if statement would treat as true
  - toBeFalsy matches anything an if statement would treat as false
*/

//toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test('User should be Lachlan Mackenzie object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Lachlan',
    lastName: 'Mackenzie'
  });
});

// toBeLessThan | toBeLessThanOrEqual
test('Should be under 1000', () => {
  const load1 = 600;
  const load2 = 200;
  expect(load1 + load2).toBeLessThan(1000);
});

// toBeGreaterThan | toBeGreaterThanOrEqual
test('Should be above 1000', () => {
  const load1 = 600;
  const load2 = 500;
  expect(load1 + load2).toBeGreaterThan(1000);
});

// Regex (toMatch)
test('There is no i in team', () => {
  expect('team').not.toMatch(/i/i);
});

// Arrays (toContain)
test('Admin should be in usernames', () => {
  usernames = ['lachlan', 'amy', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data

// Promise
test('user fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// Async Await
test('user fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
