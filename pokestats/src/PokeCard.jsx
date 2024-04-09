import img from './assets/pngegg.png'

function PokeCard(){

 return (
   <>
     <div className='cardContainer'>
       <span>#1</span>
       <div className='contentContainer'>
         <img className='' src={img} alt='' />
         <div className='infoContainer'>
           <span className='pokeName'>Crabominable</span>
           <div className='attackContainer'>
             <span>Attack1</span>
             <span>Attack2</span>
           </div>
         </div>
       </div>
     </div>
   </>
 )
}

export default PokeCard