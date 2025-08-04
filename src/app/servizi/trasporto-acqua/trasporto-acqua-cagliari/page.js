import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Cagliari",
});
export default withBaseProps({ 
    title: "Trasporto acqua Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"}  
});