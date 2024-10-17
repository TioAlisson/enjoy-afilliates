import InfoBanner from "../template/InfoBanner";
import Nav from "../template/Nav";
import Main from "./template/Main";

export default function Signin() {
  return (
    <div>
      <div className="h-[15vh]">
        <InfoBanner />
        <Nav />
      </div>
      <Main />
    </div>
  );
}