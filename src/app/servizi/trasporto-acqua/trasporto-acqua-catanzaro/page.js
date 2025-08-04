import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Catanzaro",
});
export default withBaseProps({ 
    title: "Trasporto acqua Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});