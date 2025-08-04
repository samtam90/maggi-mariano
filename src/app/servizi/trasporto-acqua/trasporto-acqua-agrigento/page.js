import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Agrigento",
});
export default withBaseProps({ 
    title: "Trasporto acqua Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});