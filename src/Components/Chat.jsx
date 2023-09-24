function Chat(Props) {
  return (
    <article className="w-full  items-center">
      <div className="flex items-center gap-3 w-full">
        <img
          src={`${Props.img}`}
          className="h-14 w-14 rounded-full object-cover "
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-black text-xm font-medium font-['Space Grotesk'] leading-tight tracking-tight">
            {Props.name}
          </h1>
          <p className="text-black text-xs font-normal font-['Space Grotesk'] leading-none tracking-tight">
            {Props.text}
          </p>
        </div>

        {Props.num && (
          <div className="w-8 ml-auto h-6 px-2.5 py-0.5 bg-blue-500 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-medium font-['Space Grotesk'] leading-none tracking-tight">
              {Props.num}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

Chat.defaultProps = {
  name: "Deleted Account",
  text: "Account Banned",
};

export default Chat;
