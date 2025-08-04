import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Piacenza",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Piacenza", 
  locationNames: {label: "Piacenza", href: "piacenza"} 
});
