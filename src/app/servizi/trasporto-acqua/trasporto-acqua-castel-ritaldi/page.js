import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Castel Ritaldi",
});
export default withBaseProps({ 
    title: "Trasporto acqua Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"}  
});