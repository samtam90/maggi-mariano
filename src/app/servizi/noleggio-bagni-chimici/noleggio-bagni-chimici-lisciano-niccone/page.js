import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lisciano Niccone",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Lisciano Niccone", 
  locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"} 
});
