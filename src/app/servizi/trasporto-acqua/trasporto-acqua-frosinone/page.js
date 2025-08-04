import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Frosinone",
});
export default withBaseProps({ 
    title: "Trasporto acqua Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"}  
});