import React from 'react'

const Memory = ({ color = 'black' }: { color?: string }) => {
  return (
    <svg
      width='24'
      height='26'
      viewBox='0 0 24 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.903 22.8381V2.40284C13.2577 2.19534 13.9146 1.92336 14.8263 1.92336C14.9797 1.92336 15.201 1.98144 15.4943 2.15608C15.7837 2.32843 16.0919 2.5841 16.4004 2.898C17.0194 3.52778 17.5489 4.29856 17.8381 4.8047C18.0093 5.10433 18.328 5.28925 18.6731 5.28925C19.2897 5.28925 20.9654 5.75363 21.5951 7.95765C22.0593 9.58239 21.3953 11.0644 20.6315 12.0381C20.3912 12.3444 20.1581 12.577 19.9808 12.7248C19.9584 12.7434 19.937 12.763 19.9164 12.7835C19.5813 13.1187 18.3729 13.9444 16.7497 13.9444C16.2186 13.9444 15.788 14.375 15.788 14.9061C15.788 15.4372 16.2186 15.8678 16.7497 15.8678C18.9361 15.8678 20.5936 14.8065 21.2441 14.1754C21.301 14.1271 21.3592 14.0754 21.4184 14.0205C21.602 14.3716 21.7309 14.9088 21.5768 15.6792C21.2932 17.0972 20.3577 17.3103 20.1156 17.3103C19.7923 17.3103 19.4907 17.4727 19.3127 17.7426C19.1348 18.0124 19.1043 18.3537 19.2317 18.6508C19.4243 19.1004 19.5439 19.7354 19.4142 20.2261C19.3553 20.449 19.249 20.632 19.0753 20.7788C18.8978 20.929 18.5915 21.0902 18.0562 21.1667C17.7727 21.2072 17.5474 21.2038 17.3703 21.1778C16.7608 21.0883 16.524 20.8284 16.3988 20.5736C16.2428 20.2561 16.2041 19.8114 16.2614 19.3529C16.3273 18.8259 15.9535 18.3453 15.4265 18.2794C14.8994 18.2135 14.4188 18.5873 14.3529 19.1144C14.2714 19.7661 14.2863 20.6358 14.6726 21.4219C14.9196 21.9247 15.299 22.3517 15.8181 22.6531C15.5768 22.8177 15.2064 22.9853 14.6377 23.0991C13.4714 23.3323 13.0369 22.9916 12.903 22.8381ZM23.4628 16.0564C23.793 14.4055 23.3043 13.1987 22.6714 12.4627C23.4309 11.208 24.0161 9.43014 23.4445 7.42926C22.6544 4.66386 20.6199 3.63585 19.2432 3.4143C18.88 2.84707 18.3675 2.15556 17.7722 1.54978C17.3915 1.16245 16.9544 0.787025 16.4784 0.503573C16.0063 0.222414 15.4423 0 14.8263 0C13.6388 0 12.6791 0.325686 12.0204 0.692263C11.1963 0.151739 9.88456 -0.11688 8.21822 0.549656C6.37338 1.28759 5.16897 2.5939 4.59631 3.47234C3.15197 3.84346 0.830724 5.09846 0.410747 8.0383C0.129346 10.0081 0.598088 11.3687 1.31122 12.163C1.15082 12.367 0.996456 12.5933 0.859508 12.8388C0.453203 13.5672 0.160344 14.5423 0.429809 15.6202C0.783162 17.0336 1.60706 18.0796 2.25472 18.6743C2.22851 19.0326 2.24359 19.4449 2.33358 19.867C2.48751 20.5888 2.87694 21.3989 3.71438 21.9572C4.54213 22.509 5.33832 22.7167 5.99119 22.7215C6.13354 23.0555 6.32612 23.4062 6.57747 23.7301C7.08914 24.3894 7.90499 25.0037 9.05624 25.0037C10.1666 25.0037 11.0778 24.719 11.73 24.3824C12.4052 24.9476 13.5073 25.2866 15.0149 24.9851C16.5886 24.6703 17.5247 23.9086 17.9386 23.1113C18.0661 23.1032 18.196 23.0896 18.3282 23.0707C19.1393 22.9548 19.8067 22.6793 20.3173 22.2474C20.8319 21.8122 21.1283 21.268 21.2738 20.7175C21.4328 20.1157 21.4151 19.5009 21.3171 18.9589C22.2072 18.5615 23.1364 17.6881 23.4628 16.0564ZM2.53922 13.7758C2.76855 13.3646 3.08385 13.0336 3.30993 12.8474C3.58535 12.7316 4.30965 12.5019 5.20949 12.5019C6.20889 12.5019 6.99176 12.7852 7.18364 12.8812C7.65869 13.1187 8.23634 12.9262 8.47387 12.4511C8.71139 11.9761 8.51884 11.3984 8.04379 11.1609C7.59455 10.9363 6.51815 10.5785 5.20949 10.5785C4.24218 10.5785 3.40177 10.774 2.84774 10.9666C2.55841 10.7231 2.06747 10.0415 2.31478 8.3103C2.61377 6.21741 4.43876 5.40912 5.3455 5.27959C5.65789 5.23496 5.92852 5.03991 6.06965 4.75765C6.30207 4.2928 7.26111 3.00403 8.93254 2.33545C10.0696 1.88062 10.7057 2.12606 10.9796 2.313V22.601C10.6249 22.8084 9.96798 23.0804 9.05624 23.0804C8.66879 23.0804 8.36268 22.8933 8.09699 22.5509C7.81784 22.1912 7.65242 21.7362 7.59504 21.4493C7.53626 21.1553 7.3438 20.9056 7.07455 20.774C6.8053 20.6423 6.49004 20.6437 6.22195 20.7777C6.22681 20.7753 6.22403 20.7758 6.21396 20.7779C6.13441 20.794 5.59979 20.9025 4.78127 20.3568C4.46469 20.1458 4.29314 19.8339 4.21466 19.4658C4.13268 19.0814 4.16997 18.7018 4.21911 18.5052C4.31768 18.1109 4.15775 17.6972 3.81959 17.4718C3.49292 17.254 2.61052 16.4128 2.29575 15.1537C2.18054 14.6928 2.28838 14.2254 2.53922 13.7758ZM16.7497 6.25094C16.7497 5.71981 16.3191 5.28925 15.788 5.28925C15.2569 5.28925 14.8263 5.71981 14.8263 6.25094C14.8263 6.24481 14.8265 6.24022 14.8265 6.23754C14.8266 6.23576 14.8266 6.23482 14.8266 6.23482C14.8263 6.2348 14.8242 6.25748 14.8141 6.31549C14.8046 6.36963 14.7936 6.42544 14.7798 6.49579L14.7567 6.61365C14.7102 6.85409 14.6501 7.18634 14.6349 7.54438C14.6046 8.25588 14.7508 9.27977 15.7354 9.93615C16.9396 10.7389 17.9911 10.6581 18.7187 10.6021L18.7188 10.6021C18.8804 10.5897 19.0261 10.5785 19.1539 10.5785C19.685 10.5785 20.1156 10.1479 20.1156 9.61682C20.1156 9.0857 19.685 8.65514 19.1539 8.65514C18.8318 8.65514 18.5742 8.67173 18.354 8.68591C17.7401 8.72545 17.4179 8.7462 16.8023 8.33581C16.6329 8.22285 16.5387 8.04463 16.5565 7.62616C16.5653 7.41922 16.6014 7.20451 16.645 6.97913L16.6624 6.89056C16.6783 6.80964 16.6955 6.72208 16.7086 6.64732C16.7256 6.55049 16.7497 6.40125 16.7497 6.25094ZM5.20951 16.8294C5.87078 16.8294 6.76275 16.8577 7.41454 17.5095C7.59506 17.69 7.69486 17.987 7.70329 18.4394C7.70731 18.6553 7.68988 18.872 7.66756 19.0838C7.66422 19.1155 7.66016 19.1515 7.65578 19.1903C7.63751 19.3523 7.61371 19.5633 7.61371 19.7145C7.61371 20.2456 8.04427 20.6762 8.5754 20.6762C9.10652 20.6762 9.53708 20.2456 9.53708 19.7145C9.53708 19.7146 9.53708 19.7146 9.53708 19.7144V19.7144C9.53711 19.7131 9.53731 19.7031 9.53889 19.6812C9.5406 19.6573 9.54336 19.6267 9.54746 19.5868C9.55282 19.5346 9.55718 19.4958 9.56211 19.452L9.56212 19.4519L9.56216 19.4516C9.56711 19.4076 9.57264 19.3584 9.58034 19.2853C9.60529 19.0485 9.63257 18.7389 9.62632 18.4036C9.61421 17.7535 9.4736 16.8485 8.77457 16.1494C7.52913 14.904 5.89906 14.9055 5.24912 14.9061L5.20951 14.9061C4.67838 14.9061 4.24782 15.3366 4.24782 15.8678C4.24782 16.3989 4.67838 16.8294 5.20951 16.8294ZM10.0181 5.28925C10.0181 4.75813 9.58755 4.32757 9.05643 4.32757C8.5253 4.32757 8.09474 4.75813 8.09474 5.28925C8.09474 5.28838 8.09473 5.28854 8.09465 5.2897C8.0942 5.29641 8.0915 5.33653 8.07557 5.40821C8.05793 5.48757 8.02718 5.5914 7.97699 5.7113C7.87704 5.95007 7.70393 6.24341 7.41473 6.53261C7.16867 6.77866 6.83679 6.95399 6.48777 7.06719C6.13653 7.18111 5.82784 7.21262 5.69054 7.21262C5.15941 7.21262 4.72886 7.64318 4.72886 8.1743C4.72886 8.70542 5.15941 9.13598 5.69054 9.13598C6.30632 9.13598 7.75494 8.91245 8.77476 7.89263C9.72076 6.94662 10.0181 5.87004 10.0181 5.28925Z'
        fill={color}
        fillOpacity='0.87'
      />
    </svg>
  )
}

export default Memory