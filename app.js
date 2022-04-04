
const Logger= require('./log');
const  logger = new Logger;

logger.on('some_event', (args)=>{
    const {id, text}= args;
    console.log(text, id);
});


logger.log('User Logged!');