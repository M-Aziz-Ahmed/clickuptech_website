import ContactForm from './ContactForm';

const Model = ({model, setModel}) => {
  return (

    model &&(
      <>
    <div className="fixed w-[99vw] bg-black opacity-25 top-0 z-[1000] left-0 transition-all ease-in" style={{height:'100vh'}}>
    </div>
    <div className="fixed left-0 lg:w-[100vw] h-[100vh] z-[1001] lg:flex lg:justify-center lg:items-center flex-col">
        <div className="bg-gradient-to-r from-red-400 to-yellow-500 transition-all duration-300 hover:from-[#fe8c00] hover:to-[#f83600] btn rounded-b-none" onClick={()=>(setModel(false))}>X</div>
        <ContactForm/>
    </div>
    </>

    )

  );
}

export default Model;