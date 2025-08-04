import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castel Ritaldi",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Castel Ritaldi", 
  locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"} 
});
