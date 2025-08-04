import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Citerna",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Citerna", 
  locationNames: {label: "Citerna", href: "citerna"} 
});
