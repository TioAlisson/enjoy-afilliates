interface EventMetricsProps {
    dict: any;
}

export default function EventMetrics({ dict }: EventMetricsProps) {
    const metrics = [
        dict.dashboard.events,
        dict.dashboard.status,
        dict.dashboard.tickets,
        dict.dashboard.commissions
    ];

    return (
        <div className="flex items-center md:justify-between text-white bg-black rounded-sm py-2 px-4 sm:px-6 w-max md:w-auto">
            {metrics.map((metric, index) => (
                <div key={index} className="pe-28 last:pe-0 md:pe-0">
                    <span>{metric}</span>
                </div>
            ))}
        </div>
    );
}
