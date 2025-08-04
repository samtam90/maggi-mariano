import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pisa",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pisa", 
  locationNames: {label: "Pisa", href: "pisa"} 
});
