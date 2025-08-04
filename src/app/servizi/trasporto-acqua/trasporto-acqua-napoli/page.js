import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Napoli",
});
export default withBaseProps({ 
    title: "Trasporto acqua Napoli", 
    locationNames: {label: "Napoli", href: "napoli"}  
});