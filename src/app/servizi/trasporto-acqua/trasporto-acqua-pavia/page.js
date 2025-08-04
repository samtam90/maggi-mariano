import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Pavia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});