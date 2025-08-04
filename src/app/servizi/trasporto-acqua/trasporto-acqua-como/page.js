import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Como",
});
export default withBaseProps({ 
    title: "Trasporto acqua Como", 
    locationNames: {label: "Como", href: "como"}  
});