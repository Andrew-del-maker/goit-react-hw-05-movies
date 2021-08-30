import './style.css'

export default function Container(props) {
    return (
        <main className="container">
            {props.children}
        </main>
    )
}