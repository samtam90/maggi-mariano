import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Lecce",
});
export default withBaseProps({ 
    title: "Trasporto acqua Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});