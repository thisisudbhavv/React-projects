export function VideoCard(props: any) {
  return (
    <div>
      <img src={props.image} className="rounded-xl" alt="" />
      <div className="grid grid-cols-12 pt-3">
        <div className="col-span-1">
          <img
            className="rounded-full w-20 h-20"
            src={props.logoImage}
            alt=""
          />
        </div>
        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className=" text-gray-400 text-base">{props.aothor}</div>
          <div className=" text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
