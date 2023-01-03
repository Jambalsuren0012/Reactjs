
const UserCard = (props) => {
  return (
    <div id="root" className="card">
      <div>{}</div>
      <div>
        <h2>Name:{props.name}</h2>
        <p>Age:{props.age}</p>
      </div>
    </div>
  );
  
};
//   return(
//       <div>
//     <h1>Average: {avgAge}</h1>
//     {
//       users.map((user)=> ( 
//           <UserCard name={user.name} age={user.age}/>
          
//           )
//           )
//       }
  
//   </div>
// )

export default UserCard;