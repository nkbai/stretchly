const lunyu = require('./lunyu.json')
// console.log(lunyu)
const data=[]
for(const key of Object.keys(lunyu)){
    const body=lunyu[key];
    for(const key2 of Object.keys(body)){
        const statement=body[key2]
        data.push({
            data:[key,statement],
            enabled:true,
        })
    }
}

module.exports=data