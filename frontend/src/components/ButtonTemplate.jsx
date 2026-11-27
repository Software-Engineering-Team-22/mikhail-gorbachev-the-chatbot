export default function ButtonTemplate({ className, text, onClick}) {
    return (
        <button className = {className} onClick = {onClick}>
        {text}
        </button>
    );
}