import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fiesole",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Fiesole", 
  locationNames: {label: "Fiesole", href: "fiesole"} 
});
