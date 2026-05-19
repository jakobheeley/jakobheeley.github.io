export default function ContactForm(){
    return(
        <div className="w-1/2 h-115 flex-col items-center bg-white rounded-2xl text-stone-600 shadow-stone-700 shadow-2xl">
          <h3 className="text-center text-3xl font-semibold pt-4">Send a Message!</h3>
          <form>
            <div className="flex justify-evenly pt-5">
              <span className="flex flex-col gap-2">
                <label className="text-lg font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="bg-slate-200 rounded h-10 pl-2 shadow-stone-400 shadow-sm"/>
              </span>
              
              <span className="flex flex-col gap-2 ">
                <label className="text-lg font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="bg-slate-200 rounded h-10 pl-2 shadow-stone-400 shadow-sm"/>
              </span>
            </div>
            <div className="flex justify-center pt-10">
              <span className="flex flex-col w-[80%] gap-2">
                <label className="text-lg font-semibold">Message</label>
                <input
                    type="textbox"
                    name="message"
                    id="message"
                    placeholder="Hi Jakob! I would love to chat to you about..."
                    className="bg-slate-200 rounded h-35 pl-4 pb-20 placeholder-[font-weight:700] shadow-stone-400 shadow-sm"/>
              </span>
            </div>
            <span className="flex justify-center pt-8">
              <button 
              className=" bg-slate-500 shadow-stone-400 shadow-sm rounded w-80 h-7.5
              transition-transform duration-300 ease-in-out transform hover:scale-105
              text-lg font-bold text-zinc-200">
                Send Message!
              </button>
            </span>
          </form>
        </div>
    );
}