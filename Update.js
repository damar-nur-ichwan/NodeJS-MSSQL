var sql = require("mssql");
const config = require('./config')

function Update(table,set,where){
    const x = sql.connect(config, function (err) {
    where = `where ${where}` || ''
    if (err) console.log(err);
    var request = new sql.Request();
    const y = request.query(`update [${table}] set ${set} ${where}`, function (err, recordset) {
        if (err) console.log(err)
        return recordset;
    });
    return y
});
return x;
}
module.exports = Update