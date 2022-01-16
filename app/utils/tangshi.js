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
// console.log(data)

const tangshidata=[]
const tangshi=require('./tangshi.json')
for (const ts of tangshi){
    tangshidata.push({
        data:[ts.title,ts.text],
        enabled:true,
    })
}
// console.log(tangshidata)

module.exports=tangshidata