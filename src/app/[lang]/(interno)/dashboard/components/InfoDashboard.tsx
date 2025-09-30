interface InfoProps {
  dict: any;
}

export default function InfoDashboard({ dict }: InfoProps) {
  const info = [
    dict.dashboard.earnings,
    dict.dashboard.clicks,
    dict.dashboard.tickets,
  ];

  let contador = 0;

  return (
    <div className="grid grid-cols-12">
      {info.map((event, index) => {
        contador++;

        return (
          <div
            key={index}
            className={`text-center py-3 lg:py-7 bg-[#E3E3E3] border border-zinc-400 border-collapse  
              ${contador === 1 ? 'col-span-12 md:col-span-4 mb-5 md:mb-0 rounded-lg md:rounded-l-lg md:rounded-r-none' : 'col-span-6 md:col-span-4'} 
              ${contador === 2 ? 'rounded-l-lg md:rounded-none' : ''} 
              ${contador === 3 ? 'rounded-r-lg' : ''} 
              `}
          >
            <h2 className="text-primary-color font-semibold text-lg sm:text-xl min-h-14 md:min-h-0">{event}</h2>
            <span className="text-2xl lg:text-4xl block mt-2">0</span>
          </div>
        );
      })}
    </div>
  );
}
