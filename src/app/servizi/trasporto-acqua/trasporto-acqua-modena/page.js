import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Modena",
});
export default withBaseProps({ 
    title: "Trasporto acqua Modena", 
    locationNames: {label: "Modena", href: "modena"}  
});