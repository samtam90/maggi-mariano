import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Marciano della Chiana",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Marciano della Chiana", 
  locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"} 
});
