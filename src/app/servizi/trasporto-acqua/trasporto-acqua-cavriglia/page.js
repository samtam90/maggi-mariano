import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Cavriglia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Cavriglia", 
    locationNames: {label: "Cavriglia", href: "cavriglia"}  
});