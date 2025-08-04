import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Teramo",
});
export default withBaseProps({ 
    title: "Trasporto acqua Teramo", 
    locationNames: {label: "Teramo", href: "teramo"}  
});