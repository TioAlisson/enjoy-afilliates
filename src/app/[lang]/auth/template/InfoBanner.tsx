interface InfoBannerProps {
  dict: any;
}

export default function InfoBanner({ dict }: InfoBannerProps) {
  return (
    <div className="py-2 color-animation">
      <h2 className="text-center text-white font-semibold ">{dict.signin.banner}</h2>
    </div>
  );
}
