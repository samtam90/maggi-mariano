import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Modena",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Modena", 
  locationNames: {label: "Modena", href: "modena"} 
});
