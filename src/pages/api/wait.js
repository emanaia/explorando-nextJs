
export default async function wait(req, res) {

    await new Promise(resolve => setTimeout(resolve, 5000));

    // const dynamicDate = new Date();
    // res.status(200).json( {date: dynamicDate.toGMTString()} );

  
    res.status(200).json( "ok" );
    
}