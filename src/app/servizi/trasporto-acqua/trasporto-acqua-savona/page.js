import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Savona",
});
export default withBaseProps({ 
    title: "Trasporto acqua Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});