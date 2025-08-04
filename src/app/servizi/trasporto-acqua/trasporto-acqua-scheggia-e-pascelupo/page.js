import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Scheggia e Pascelupo",
});
export default withBaseProps({ 
    title: "Trasporto acqua Scheggia e Pascelupo", 
    locationNames: {label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo"}  
});