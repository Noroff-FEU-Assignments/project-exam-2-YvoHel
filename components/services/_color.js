

export const getStaticProps = async() =>{

  const res = await fetch('https://hairways.yvonnehelander.info/wp-json/wp/v2/edd-downloads?edd-categories=22');
  const data = await  res.json();

  console.log(data);

  

  return{
    props : { color:data}
  }

}

const Color =({color}) =>{
  return (
    <>
    <h1>Color</h1>
    {color&&color.map(color=>(
      <div key = {color.id}> 
      <a>
        <h3>{color.title}</h3>
      </a>
      </div>
    ))}
    </>
  )
}

export default Color;