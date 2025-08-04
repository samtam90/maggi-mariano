import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Terni",
});
export default withBaseProps({ 
    title: "Trasporto acqua Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});