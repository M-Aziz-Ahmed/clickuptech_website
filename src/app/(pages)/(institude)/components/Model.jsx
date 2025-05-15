import ContactForm from './ContactForm';

const Model = ({ model, setModel }) => {
  return (

    model && (
      <>
        <div className="fixed w-[99vw] bg-transparent backdrop-blur-sm opacity-100 top-0 z-[1] left-0 transition-all ease-in" style={{ height: '100vh' }} onClick={()=>(setModel(false))}>
        </div>
        <div className="fixed lg:z-2 z-[2] lg:left-[30vw] lg:top-[10vh] w-[100vw] h-[100vh] lg:w-0 lg:h-0 flex px-5 lg:p-0 flex-col justify-center lg:block">
          <div className="z-4">
            <div className="bg-gradient-to-r from-red-400 to-yellow-500 transition-all duration-300 hover:from-[#fe8c00] hover:to-[#f83600] btn rounded-b-none" onClick={() => (setModel(false))}>X</div>
            <ContactForm />
          </div>
        </div>
      </>

    )

  );
}

export default Model;