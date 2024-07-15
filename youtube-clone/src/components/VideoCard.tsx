export function VideoCard(props: any) {
  return (
    <div className="p-2 cursor-pointer">
      <img src={props.image} className="rounded-xl" alt="" />
      <div className="grid grid-cols-12 pt-3">
        <div className="col-span-1">
          <img
            className="rounded-full w-10 h-10"
            src={props.logoImage}
            alt=""
          />
        </div>
        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className=" text-gray-400 text-base">{props.author}</div>
          <div className=" text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
