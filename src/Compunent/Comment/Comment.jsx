import React from 'react';

const Comment = ({data}) => {
    console.log(data)
    const {name,title,userImg} = data;
    console.log(name,title,userImg)
    return (
        <div className="p-8 bg-gray-50 border border-transparent rounded-lg dark:bg-blue-600">
        <p className="leading-loose text-black">
          {title}
        </p>
        <div className="flex items-center mt-8 -mx-2">
          <img
            className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
            src={userImg}
            alt=""
          />
          <div className="mx-2">
            <h1 className="font-semibold text-xl text-black">{name}</h1>
            <span className="text-sm text-blue-200">{data?.time}</span>
          </div>
        </div>
      </div>
    );
};

export default Comment;