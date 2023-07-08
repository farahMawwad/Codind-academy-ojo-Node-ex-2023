const cluster = require ('cluster')
const { error } = require('console')
const os = require ('os')
if (cluster.isMaster && process.pid !== undefined) {
const numcpus=os.cpus().length
for(let i =0 ; i<numcpus;i++){
    cluster.fork()
}
cluster.on('exit',(worker,code,signal)=>{
    if(code==0){
        console.log(`Worker process ${worker.process.pid} exited successfully`);
    }
    else {
        console.log('error')
        cluster.fork()
    }
})
}
else{
    console.log('not master')
}