const jsonServer=require("json-server")
const MPServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT=3000
const rout = jsonServer.router('db.json')


MPServer.use(middleware)
MPServer.use(rout)

MPServer.listen(PORT,()=>{
    console.log(`MPServer started on ${PORT}`);
    
})