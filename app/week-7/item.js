
export default function Item (props) {
    return (    
        <ul className= "max-w-md flex flex-col justify-items-start p-4 bg-gray-500 shadow-md my-3">
            <div>
                <li className= "text-lg font-semibold text-white">{props.name} </li>
            </div>
            <ul className="flex items-center space-x-1 text-gray-300">
                <li>
                    Buy {props.quantity} in {props.category}
                    </li>
            </ul>
        </ul>
    );
}