import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Imperia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});