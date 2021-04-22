var sql = require("mssql");
const config = require('./config')

function Insert(table,column,value){
    const x = sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    const y = request.query(`insert into [${table}] (${column}) values (${value})`, function (err, recordset) {
        if (err) console.log(err)
        return recordset;
    });
    return y
});
return x;
}
module.exports = Insert