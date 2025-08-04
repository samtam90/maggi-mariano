import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Benevento",
});
export default withBaseProps({ 
    title: "Trasporto acqua Benevento", 
    locationNames: {label: "Benevento", href: "benevento"}  
});