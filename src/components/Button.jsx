export const Button = ({type, onClick, text}) => {

    return (
        <button className="bg-gradient-to-r from-[#604cc7] to-[#44327b] text-white px-6 py-2 rounded-full cursor-pointer font-medium" type={type} onClick={onClick}>
            {text}
        </button>
    );
}