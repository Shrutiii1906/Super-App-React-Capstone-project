const Select = ({color,categories})=>{
    return(
        <div style={{width:"20vw"}}>
       {categories.map((category)=>(
                <button style={{background:`${color}`, borderRadius:"12px",width:"100px", color:"white", border:"none",padding:"6px", height:"30px",flexShrink:0, margin:"10px"}}>{category}  <span style={{color:"black", marginLeft:"4px"}}>X</span></button>
        ))}
        </div>
    )
}
export default Select;