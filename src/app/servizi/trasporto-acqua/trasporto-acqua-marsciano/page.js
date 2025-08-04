import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Marsciano",
});
export default withBaseProps({ 
    title: "Trasporto acqua Marsciano", 
    locationNames: {label: "Marsciano", href: "marsciano"}  
});