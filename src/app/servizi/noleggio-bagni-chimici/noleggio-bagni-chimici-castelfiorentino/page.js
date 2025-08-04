import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castelfiorentino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castelfiorentino", 
  locationNames: {label: "Castelfiorentino", href: "castelfiorentino"} 
});
