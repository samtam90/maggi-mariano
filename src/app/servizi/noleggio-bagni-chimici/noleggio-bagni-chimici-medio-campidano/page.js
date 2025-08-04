import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Medio Campidano",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Medio Campidano", 
  locationNames: {label: "Medio Campidano", href: "medio-campidano"} 
});
