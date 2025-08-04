import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Catania",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Catania", 
  locationNames: {label: "Catania", href: "catania"} 
});
