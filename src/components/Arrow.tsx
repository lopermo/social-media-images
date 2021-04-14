import * as React from "react";

function SvgCurvedArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 365.07 365.07"
      fill="currentColor"
      {...props}
    >
      <path d="M44.982 3.271c-3.672 2.448-8.568 3.06-11.628 6.12-2.448 1.836-2.448 5.508 0 7.344 2.448 1.224 5.508 0 7.956-.612 1.836-.612 2.448-1.836 2.448-3.672 1.836-1.224 3.672-2.448 4.896-4.284 2.448-2.448-.612-7.344-3.672-4.896zM20.502 39.379a83.539 83.539 0 00-10.404 10.404c-3.06 3.672-6.732 8.568-6.732 12.852 0 2.448 3.06 3.672 4.284 1.836 3.06-3.06 3.672-7.956 6.12-11.628 2.448-4.284 5.508-7.344 9.18-11.016 1.224-1.836-1.224-3.672-2.448-2.448zM5.814 94.459C4.59 89.563 3.978 84.055 3.978 78.547c0-1.836-3.06-1.836-3.06 0 0 7.344-3.672 22.032 3.672 26.928 1.224 1.224 3.06-.612 3.06-1.836 0-3.06-1.224-6.12-1.836-9.18zM40.086 117.715c-9.792 1.224-18.36 3.06-27.54-1.836-1.224-.612-1.836.612-.612 1.224 9.18 6.732 19.584 9.792 29.988 4.284 2.448-1.224 0-4.284-1.836-3.672zM84.15 85.891c-4.896 1.836-8.568 5.508-12.852 8.568-4.896 3.672-9.18 7.344-13.464 11.628-1.224 1.224.612 3.672 2.448 2.448 3.672-3.672 7.956-6.12 12.24-9.18 4.284-3.06 9.792-5.508 13.464-9.18 1.836-1.836.612-5.508-1.836-4.284zM125.154 41.827c-11.016 4.284-21.42 14.688-29.376 23.256-1.224 1.836.612 3.672 2.448 2.448 4.896-4.284 10.404-8.568 15.912-12.24 4.284-3.06 9.18-5.508 12.852-9.18 1.836-2.448 0-4.896-1.836-4.284zM179.622 19.183c-11.016-.612-22.032 3.672-31.824 7.344-1.836.612-1.224 3.06.612 3.06 10.404-3.06 20.808-4.284 31.212-4.896 3.06-.612 3.06-5.508 0-5.508zM220.626 39.379c-3.06-3.672-7.344-7.344-11.016-10.404-3.06-2.448-6.732 1.224-4.284 4.284 3.061 3.06 6.12 6.732 9.18 10.404 3.061 3.672 6.12 9.18 10.404 12.24 1.836 1.224 4.284-.612 3.672-3.06 0-4.896-4.284-9.792-7.956-13.464zM232.254 72.427c0-2.448-4.283-2.448-4.283 0-.612 6.12-1.836 11.628-3.061 17.748-1.224 5.508-4.284 11.016-4.284 17.136 0 3.06 4.284 4.284 5.509 1.224 5.508-10.404 6.731-25.092 6.119-36.108zM205.938 134.239l-9.181 12.852c-2.447 4.284-6.731 8.568-7.344 13.464 0 2.448 2.448 3.06 4.284 2.448 4.284-1.836 6.12-7.344 7.956-11.016 3.06-4.896 5.508-10.404 8.568-15.3 1.225-3.06-2.447-4.896-4.283-2.448zM175.338 178.915c-5.508 4.896-9.792 9.792-13.464 15.3-3.672 5.508-8.568 13.464-7.344 20.196.612 3.06 3.672 3.672 5.508 1.224 3.06-4.284 3.672-10.404 5.508-15.3 2.448-7.344 6.732-14.076 11.628-20.196 1.224-.612-.612-2.448-1.836-1.224zM140.454 238.891c-5.508 4.896-9.792 10.404-13.464 17.136-3.672 6.732-7.956 15.301-6.732 22.645.612 2.448 4.284 2.448 4.896.612 3.672-5.509 3.672-12.853 6.12-18.973 2.448-6.731 6.732-13.464 11.628-19.584 1.224-1.224-.612-3.672-2.448-1.836zM139.842 332.526c-4.284-2.447-7.956-4.283-11.016-7.955-3.06-4.896-4.284-12.24-4.284-17.748 0-1.837-3.06-1.837-3.06 0-1.224 11.628 1.224 31.823 17.136 31.212 2.448-.612 3.672-4.284 1.224-5.509zM204.714 353.947c-6.731-.612-13.464.611-20.195.611-8.569-.611-16.525-3.06-23.257-7.956-1.224-.611-1.836 1.225-1.224 1.836 12.852 9.792 30.601 18.36 46.513 11.628 3.059-1.836 1.223-6.119-1.837-6.119zM256.734 312.331c-4.284 2.448-7.956 6.12-12.852 9.18-4.284 2.448-9.181 3.672-14.076 4.284-3.061.612-3.061 4.896 0 4.896 11.016.612 25.092-3.06 31.212-13.464 2.449-3.06-1.224-6.121-4.284-4.896zM281.826 275.61c-7.956 7.956-16.523 16.524-22.032 26.316-1.836 3.061 2.448 4.896 4.284 2.448 6.732-8.568 17.748-14.688 22.645-25.092.611-3.059-2.449-6.119-4.897-3.672zM327.727 276.223c-1.836-3.672-6.732-6.12-10.404-7.956-4.284-1.836-9.18-2.447-14.076-2.447-3.06 0-3.06 4.283 0 4.283 4.284 0 7.956 1.225 11.628 3.061 3.061 1.836 5.509 4.896 8.568 6.731 2.448 1.835 5.507-1.224 4.284-3.672z" />
      <path d="M364.446 300.091c-8.568-14.076-14.076-29.988-21.42-44.676-3.672-6.732-13.464-.612-10.404 6.12 5.508 12.239 10.404 25.092 17.748 36.72-5.508.612-11.016 1.224-17.136 1.836-2.448.612-6.732.612-8.568 3.061l-.611.611s-.612 0-.612.612c-1.224 1.224 0 3.672 1.224 3.672.612.612 1.225.612 2.448.612 3.061.611 6.12 0 9.792 0 7.956-.612 15.3-1.225 23.256-.612 3.671.612 6.119-4.284 4.283-7.956z" />
    </svg>
  );
}

export default SvgCurvedArrow;