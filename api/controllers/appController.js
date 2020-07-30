import Contacts from "../model/appModelContact.js";

// COUNT APIs
export const count_all_records = function (req, res) {
  Count.countAllRecords(function (err, count) {
    if (err) return res.send(err);
    res.send(count);
  });
};
