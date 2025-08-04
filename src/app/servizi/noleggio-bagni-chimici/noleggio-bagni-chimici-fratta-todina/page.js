import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fratta Todina",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Fratta Todina", 
  locationNames: {label: "Fratta Todina", href: "fratta-todina"} 
});
