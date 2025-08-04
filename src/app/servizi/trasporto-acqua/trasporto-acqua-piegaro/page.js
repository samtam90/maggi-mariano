import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Piegaro",
});
export default withBaseProps({ 
    title: "Trasporto acqua Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});