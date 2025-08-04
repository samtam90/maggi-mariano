import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Paciano",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Paciano", 
  locationNames: {label: "Paciano", href: "paciano"} 
});
