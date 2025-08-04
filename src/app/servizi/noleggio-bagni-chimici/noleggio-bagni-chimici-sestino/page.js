import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sestino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Sestino", 
  locationNames: {label: "Sestino", href: "sestino"} 
});
