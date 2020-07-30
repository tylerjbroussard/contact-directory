import getDb from "./db";

//Brutality object constructor
var Contact = function (contact) {
  this.contact = contact.contact;
  this.status = contact.status;
  this.created_at = new Date();
};

Contact.getAllContacts = async function (result) {
  const sql = await getDb();
  sql.query("Select * from contacts", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


export default Contacts;
