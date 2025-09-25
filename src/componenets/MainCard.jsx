import React from "react";

function MainCard() {
  return (
    <div className="h-dvh p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-amber-200 rounded grid  gap-4 ">
        <div className=" bg-amber-950  rounded grid grid-cols-2 gap-2">
          <div className="bg-violet-950 rounded">qq</div>
          <div className="bg-teal-950 rounded">qq</div>
        </div>
        <div className="bg-violet-950 rounded">sa</div>
        <div className="bg-teal-950 rounded grid grid-cols-2 gap-2">
          <div className="bg-amber-400 rounded">qqq</div>
          <div className="bg-amber-700 rounded">qqq</div>
        </div>
      </div>

      <div className="MainBox02 bg-amber-400  rounded grid gap-4">
        <div className="bg-teal-100 rounded">11</div>
        <div className="bg-teal-500 rounded">22</div>
        <div className="bg-teal-700 rounded">33</div>
      </div>
      <div className="MainBox03 bg-amber-600 rounded grid gap-4">
        <div className="bg-teal-100 rounded">11</div>
        <div className="bg-teal-500 rounded">22</div>
        <div className="bg-teal-700 rounded grid grid-cols-2 gap-2">
            <div className="bg-teal-950 rounded">11</div>
            <div className="bg-violet-950 rounded">22</div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
