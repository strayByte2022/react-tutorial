// this is a react component. 
//jsx = javascript xml 
//follow PascalCasing . 

function Message ()
{
    const temp = ["Linh","admin"]
    if (temp.length!=0)
        return <h1>Hello {temp[1]}</h1>;
    else 
        return <h1>Hello World</h1>
}
export default Message; 