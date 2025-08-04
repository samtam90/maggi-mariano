import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Magione",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Magione", 
  locationNames: {label: "Magione", href: "magione"} 
});
