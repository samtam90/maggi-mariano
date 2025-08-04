import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Carbonia Iglesias",
});
export default withBaseProps({ 
    title: "Trasporto acqua Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});