import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Torino",
});
export default withBaseProps({ 
    title: "Trasporto acqua Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});