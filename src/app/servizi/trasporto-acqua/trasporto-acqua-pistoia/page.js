import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Pistoia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});