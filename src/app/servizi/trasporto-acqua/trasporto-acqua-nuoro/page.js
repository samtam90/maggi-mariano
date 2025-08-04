import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Nuoro",
});
export default withBaseProps({ 
    title: "Trasporto acqua Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"}  
});