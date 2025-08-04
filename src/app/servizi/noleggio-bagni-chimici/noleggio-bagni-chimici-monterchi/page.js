import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monterchi",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Monterchi", 
  locationNames: {label: "Monterchi", href: "monterchi"} 
});
