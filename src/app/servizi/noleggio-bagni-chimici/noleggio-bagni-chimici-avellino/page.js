import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Avellino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Avellino", 
  locationNames: {label: "Avellino", href: "avellino"} 
});
