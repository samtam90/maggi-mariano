import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Poggiodomo",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Poggiodomo", 
  locationNames: {label: "Poggiodomo", href: "poggiodomo"} 
});
