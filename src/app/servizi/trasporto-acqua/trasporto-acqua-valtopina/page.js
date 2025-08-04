import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Valtopina",
});
export default withBaseProps({ 
    title: "Trasporto acqua Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});