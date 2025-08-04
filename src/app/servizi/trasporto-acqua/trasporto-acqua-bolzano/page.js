import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Bolzano",
});
export default withBaseProps({ 
    title: "Trasporto acqua Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"}  
});