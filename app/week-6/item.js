export default function Item (props) {
    return (    
        <ul className="flex flex-col justify-items-start p-4 bg-blue-500 shadow-md my-4 max-w-md w-full">
            <div>
                <li className="text-lg font-semibold text-white">{props.name} </li>
            </div>
            <ul className="flex items-center space-x-1 text-gray-200">
                <li>
                    Buy {props.quantity} in {props.category}
                </li>
            </ul>
        </ul>
    );
}
