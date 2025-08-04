import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castiglion Fiorentino",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castiglion Fiorentino", 
  locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"} 
});
