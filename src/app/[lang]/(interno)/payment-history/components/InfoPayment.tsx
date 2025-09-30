interface InfoPaymentProps {
    money: string
    paragraph?: string
}

export default function InfoPayment(props: InfoPaymentProps) {
    return (
        <div className="w-full sm:border-r-2 border-zinc-400 last:border-r-0 flex flex-col items-center py-6">
            <span className="inline text-2xl font-semibold">£ {props.money}</span>
            <p className="text-red-700">{props.paragraph}</p>
        </div>
    );
}