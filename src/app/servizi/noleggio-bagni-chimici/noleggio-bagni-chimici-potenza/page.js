import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Potenza",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Potenza", 
  locationNames: {label: "Potenza", href: "potenza"} 
});
