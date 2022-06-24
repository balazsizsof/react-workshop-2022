export default function Premium({ isPremium, onClick }) {
    const message = isPremium ? "Premium conversion! 💎" : "Let's get premium! 😎" 
    return (
        <button onClick={onClick}>{message}</button>
    );
}