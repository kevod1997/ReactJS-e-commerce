import React from "react";

export default function Loader() {
  return (
    <div className="text-center">
      <div className="spinner-border"  style={{width: '10rem', height: '10rem', marginTop: '15rem'}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
