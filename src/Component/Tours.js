import Cards from "./Cards";


const Tours = (props) => {
  
  
    return (
    <div className="cards">
        {props.tours?.map((el) => {
            console.log("Tourwalaconsole",el)
            return(
                <Cards key={el.id} data={el} handlenotInterested={props.ondelete}/>
            )
        })}
        </div>
);
};

export default Tours;
