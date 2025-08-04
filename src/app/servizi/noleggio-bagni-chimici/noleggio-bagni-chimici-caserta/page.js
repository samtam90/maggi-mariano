import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Caserta",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Caserta", 
  locationNames: {label: "Caserta", href: "caserta"} 
});
