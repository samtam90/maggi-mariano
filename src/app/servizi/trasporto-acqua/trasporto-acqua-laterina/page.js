import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Laterina",
});
export default withBaseProps({ 
    title: "Trasporto acqua Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});