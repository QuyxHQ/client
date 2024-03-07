const HowItWorks1 = ({ width, height, className }: Omit<IconProps, "fill">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "278"}
      height={height || "187"}
      className={className}
      fill="none"
      viewBox="0 0 278 187"
    >
      <rect width="277" height="153" x="0.5" y="33.5" fill="#111" stroke="#555" rx="7.5"></rect>
      <rect width="211" height="143" x="33.5" y="0.5" fill="#171A25" rx="4.5"></rect>
      <rect width="211" height="143" x="33.5" y="0.5" stroke="#888" rx="4.5"></rect>
      <rect width="174" height="36" x="52" y="95" fill="#555" rx="8"></rect>
      <path
        fill="#fff"
        d="M92.196 118.154c-2.562 0-4.676-2.142-4.676-4.844 0-2.674 2.114-4.816 4.676-4.816 1.568 0 2.954.798 3.696 2.086l-.728.434a3.477 3.477 0 00-2.996-1.666c-2.044 0-3.724 1.75-3.724 3.962 0 2.24 1.666 3.99 3.724 3.99 1.246 0 2.366-.616 2.996-1.652l.728.434c-.742 1.288-2.128 2.072-3.696 2.072zm8.327-.014a3.537 3.537 0 01-3.57-3.556c0-1.946 1.582-3.528 3.57-3.528 2.03 0 3.556 1.596 3.556 3.528a3.534 3.534 0 01-3.556 3.556zm0-.826c1.498 0 2.688-1.232 2.688-2.716 0-1.484-1.19-2.716-2.688-2.716a2.707 2.707 0 00-2.702 2.716 2.707 2.707 0 002.702 2.716zm8.535-5.432c-1.54 0-2.366 1.274-2.366 2.716V118h-.868v-3.472c0-1.96 1.19-3.472 3.234-3.472 2.086 0 3.304 1.498 3.304 3.458V118h-.868v-3.388c0-1.456-.854-2.73-2.436-2.73zm8.777 0c-1.54 0-2.366 1.274-2.366 2.716V118h-.868v-3.472c0-1.96 1.19-3.472 3.234-3.472 2.086 0 3.304 1.498 3.304 3.458V118h-.868v-3.388c0-1.456-.854-2.73-2.436-2.73zm8.554 6.258c-2.002 0-3.5-1.526-3.5-3.556 0-1.96 1.358-3.542 3.346-3.542 1.974 0 3.262 1.414 3.262 3.346v.518h-5.754c.14 1.386 1.204 2.408 2.646 2.408.924 0 1.764-.35 2.254-1.218l.672.364c-.616 1.12-1.68 1.68-2.926 1.68zm-2.618-3.934h4.858c-.028-1.414-1.022-2.338-2.394-2.338-1.414 0-2.338 1.022-2.464 2.338zm10.533 3.934c-1.876.014-3.458-1.582-3.458-3.542 0-1.96 1.582-3.542 3.458-3.542 1.204 0 2.296.532 2.926 1.68l-.728.42c-.49-.868-1.288-1.274-2.198-1.274-1.4 0-2.59 1.232-2.59 2.716 0 1.484 1.19 2.716 2.59 2.716.91 0 1.708-.406 2.198-1.26l.728.406c-.63 1.148-1.722 1.68-2.926 1.68zm7.282.014c-1.442 0-2.282-.938-2.282-2.38v-3.78h-1.442v-.784h1.442v-1.806h.868v1.806h2.772v.784h-2.772v3.752c0 1.008.588 1.596 1.484 1.596.49 0 .952-.182 1.288-.462v.84c-.35.266-.854.434-1.358.434zm8.659-1.05l-1.862-8.456h.896l1.778 8.204c.07.336.182.504.378.504s.336-.154.42-.504l1.694-7.294c.14-.63.532-.924 1.008-.924.49 0 .868.28 1.022.91l1.792 7.294c.084.336.182.504.406.504.21 0 .308-.182.364-.504l1.596-8.19h.896l-1.666 8.344c-.14.686-.49 1.148-1.148 1.148-.658 0-1.022-.364-1.218-1.148l-1.778-7.238c-.056-.238-.126-.322-.266-.322-.126 0-.21.084-.266.322l-1.708 7.378c-.154.658-.588 1.022-1.148 1.022-.574 0-1.036-.364-1.19-1.05zm14.588 1.036c-1.96 0-3.444-1.596-3.444-3.556 0-1.932 1.526-3.528 3.556-3.528 2.002 0 3.57 1.54 3.57 3.528V118h-.826v-1.582c-.518 1.022-1.568 1.722-2.856 1.722zm.112-.826a2.707 2.707 0 002.702-2.716 2.707 2.707 0 00-2.702-2.716c-1.498 0-2.688 1.232-2.688 2.716 0 1.484 1.19 2.716 2.688 2.716zm6.087-9.226h.868V118h-.868v-9.912zm3.664 0h.868V118h-.868v-9.912zm6.394 10.052c-2.002 0-3.5-1.526-3.5-3.556 0-1.96 1.358-3.542 3.346-3.542 1.974 0 3.262 1.414 3.262 3.346v.518h-5.754c.14 1.386 1.204 2.408 2.646 2.408.924 0 1.764-.35 2.254-1.218l.672.364c-.616 1.12-1.68 1.68-2.926 1.68zm-2.618-3.934h4.858c-.028-1.414-1.022-2.338-2.394-2.338-1.414 0-2.338 1.022-2.464 2.338zm10.309 3.948c-1.442 0-2.282-.938-2.282-2.38v-3.78h-1.442v-.784h1.442v-1.806h.868v1.806h2.772v.784h-2.772v3.752c0 1.008.588 1.596 1.484 1.596.49 0 .952-.182 1.288-.462v.84c-.35.266-.854.434-1.358.434z"
      ></path>
      <path fill="#404040" d="M63 13H83V33H63z"></path>
      <path fill="#404040" d="M91 13H215V17H91z"></path>
      <path fill="#404040" d="M91 21H215V25H91z"></path>
      <path fill="#404040" d="M91 29H215V33H91z"></path>
      <path fill="#404040" d="M91 37H215V41H91z"></path>
      <path fill="#404040" d="M63 57H83V77H63z"></path>
      <path fill="#404040" d="M91 57H215V61H91z"></path>
      <path fill="#404040" d="M91 65H215V69H91z"></path>
      <path fill="#404040" d="M91 73H215V77H91z"></path>
      <path fill="#404040" d="M91 81H215V85H91z"></path>
      <path
        fill="url(#paint0_linear_597_17435)"
        d="M209.172 140.115l-3.909 8.213c-.163.4-.532.664-.944.672h-.014c-.405 0-.774-.249-.951-.634l-7.253-20.773a1.159 1.159 0 01.213-1.268.989.989 0 011.192-.211l19.904 8.224c.376.196.61.619.589 1.064a1.112 1.112 0 01-.696.989l-8.131 3.724z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_597_17435"
          x1="218"
          x2="192.816"
          y1="126"
          y2="130.285"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9327FF"></stop>
          <stop offset="1" stopColor="#FFA927"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HowItWorks1;
