import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Reggello",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Reggello", 
  locationNames: {label: "Reggello", href: "reggello"} 
});
