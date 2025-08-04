import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Foligno",
});
export default withBaseProps({ 
    title: "Trasporto acqua Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});