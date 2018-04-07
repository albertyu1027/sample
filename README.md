
Sample Blockchain Application:

=======
# sample

Blockchain Sample

Logic: 
Two participants are able to CRU(D) all collections in a shared database. 
C- create new task in a business or project setting
R- read all collections in the database
U- Update selected collections in database
D- Delete selected collections in database (Prefer not to use this because of immutability)

STEPS:
1. Set up Authentication with Google Auth
2. Set up two participants. These two participants will have access to the same database (not local).
  - Start with Mongo. Set up CRUD functionality for all participants. Front-end should have a container to read
    and render all collections in database as "task" buttons.
  - Use Mlab in Heroku to store data. We will use Mlab as our "immutable ledger". 
3. Collections in database should be labeled by "tasks" sequentially.
4. When participant clicks on any "task", he/she will have access to update or delete. Participants can create more
  tasks aka appending a new button on front-end and creating a new collection in Mongo.

Model:
  const taskSchema = new Schema({
    description: { type: String, required: true },
    dollar: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    completed: { type: Boolean, required: true }
});
  
