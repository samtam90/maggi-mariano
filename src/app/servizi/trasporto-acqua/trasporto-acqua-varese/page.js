import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Varese",
});
export default withBaseProps({ 
    title: "Trasporto acqua Varese", 
    locationNames: {label: "Varese", href: "varese"}  
});