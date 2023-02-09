const fs = require("fs/promises");
const path = require('path')

const contactsPath = path.join(__dirname,'./db/contacts.json');
const readFile = async() => {
    return JSON.parse(await fs.readFile(contactsPath, 'utf-8'));
};


async function listContacts() {
const listofContacts = await readFile();
return listofContacts;  }
  
async  function getContactById(contactId) {
   const listofContacts = await readFile();
   return listofContacts.find((item) =>{
    if (contactId.toString() === item.id)
    {return item;} 
   });
  }
  
async  function removeContact(contactId) {
   const listofContacts = await readFile();
   return listofContacts.filter((item) => {
    return contactId.toString()!==item.id;
   });
  }
  
async  function addContact(name, email, phone) {
   const listofContacts = await readFile();
const newContact = {
    name,
    email,
    phone,
    id:(listofContacts.length + 1).toString(),
};
listofContacts.push(newContact);
return listofContacts;  
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};