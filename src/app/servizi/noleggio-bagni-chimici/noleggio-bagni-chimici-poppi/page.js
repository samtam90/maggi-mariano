import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Poppi",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Poppi", 
  locationNames: {label: "Poppi", href: "poppi"} 
});
