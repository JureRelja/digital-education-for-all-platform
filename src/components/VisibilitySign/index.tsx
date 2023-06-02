import bannersUrl from "../../assets/Visibility_2.jpg";

function index(props: any) {
  return (
    <div
      className={`bottom-0 z-50 xl:py-3 xl:border-t-slate-300 xl:border-t-[1px] flex justify-center items-center align-middle ${props.className} sm:w-3/4 lg:w-2/4 xl:w-full`}
    >
      <div className="bg-white px-5 py-2 flex flex-col gap-2 text-center justify-center items-center align-middle max-w-fit rounded-lg ">
        <img src={bannersUrl} className="h-auto" />
        <p className="text-slate-600 text-xs w-full">
          The content of this web application reflects the views only of the
          author, and the Commission cannot be held responsible for any use
          which may be made of the information contained therein.
        </p>
      </div>
    </div>
  );
}

export default index;
