import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Bibbiena",
});
export default withBaseProps({ 
    title: "Trasporto acqua Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"}  
});