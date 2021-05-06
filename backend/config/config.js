/**
 * 
 * @param {connection database} package 
 */

exports.db = (package) =>{
package.connect(process.env.DB_CONNECTION, 
    {useUnifiedTopology: true,
    useNewUrlParser: true 
})
.then(()=>console.log('connection success!'))
.catch(()=>console.log('connection failed!'))
}

/**
 * @params (date format)
 */

exports.date= ()=>{
    const d = new Date();
    let month = d.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;  
}

