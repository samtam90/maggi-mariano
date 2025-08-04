import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pavia",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pavia", 
  locationNames: {label: "Pavia", href: "pavia"} 
});
