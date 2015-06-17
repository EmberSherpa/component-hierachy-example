export default function() {

  this.get('/children', function(db, request) {
    let id = request.queryParams.id;
    let result = [];
    if (request.queryParams.type == null) {
      result = [
        { id: 1, type: 'client', parent: null, name: 'Sunny Corp.' }
      ];
    }
    if (request.queryParams.type === 'client') {
      result = [
        { id: 2, type: 'site', parent: id, name: 'Sunny Field' }
      ];
    }
    if (request.queryParams.type === 'site') {
      result = [
        { id: 4, type: 'component', parent: id, name: 'Big sensor' },
        { id: 5, type: 'component', parent: id, name: 'Small sensor' },
        { id: 6, type: 'component', parent: id, name: 'Medium resistor' }
      ];
    }
    if (request.queryParams.type === 'component') {
      result = [
        { id: 7, type: 'atom', parent: id, name: 'Atom 1' },
        { id: 8, type: 'atom', parent: id, name: 'Atom 2' },
        { id: 9, type: 'atom', parent: id, name: 'Atom 3' }
      ];
    }
    return result;
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection} // returns all the data defined in /app/mirage/fixtures/{collection}.js
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;
      var contact = db.contacts.find(contactId);
      var addresses = db.addresses
        .filterBy('contact_id', contactId);

      return {
        contact: contact,
        addresses: addresses
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
