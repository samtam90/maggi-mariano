import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Soci",
});
export default withBaseProps({ 
    title: "Trasporto acqua Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});