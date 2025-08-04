import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Castelfiorentino",
});
export default withBaseProps({ 
    title: "Trasporto acqua Castelfiorentino", 
    locationNames: {label: "Castelfiorentino", href: "castelfiorentino"}  
});