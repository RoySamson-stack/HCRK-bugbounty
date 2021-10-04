import React from 'react';

function Signup(props) {
  return (
    <div className="m-7 bg-gray-300 rounded h-full">
      <form className="border-gray-200 w-1/5 form hover:border-light-blue-500">
        <input className="m-4" placeholder="Enter your name or alias"/>
        <input className="m-4" placeholder="Enter your email"/>
        <input className="m-4" placeholder="Enter your name or alias"/>
        <input
          type="submit"
          className="m-4 w-32 bg-blue-500 rounded hover:bg-blue-300"/>
      </form>
    </div>
  );
}

export default Signup;