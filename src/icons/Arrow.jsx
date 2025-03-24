export const Arrow = ({size, type}) => {
    const sizeMap = {
        large: "h-6 w-6",
        small: "h-4 w-6"
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className={`text-gray-400 ${sizeMap[size] || ''}`}
        >
            {type =="up" ? 
                (<path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                ></path>) : 
                (<path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                ></path>)
            }
        </svg>
    )
}