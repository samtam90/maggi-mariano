import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pordenone",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pordenone", 
  locationNames: {label: "Pordenone", href: "pordenone"} 
});
