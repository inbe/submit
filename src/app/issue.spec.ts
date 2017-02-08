import {Issue} from './issue';

describe('Issue', () => {
  it('should create an instance', () => {
    expect(new Issue()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
  let issue = new Issue({
    user: 1,
    description: 'Need more sun in february!'
  });
    expect(issue.user).toEqual(1);
    expect(todo.description).toEqual('Need more sun in february!');
  });
});
