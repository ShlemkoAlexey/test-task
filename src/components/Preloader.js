import * as React from "react";

export default function Preloader() {
    return (
        <div className="d-flex justify-content-center preloader-wrapper">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}