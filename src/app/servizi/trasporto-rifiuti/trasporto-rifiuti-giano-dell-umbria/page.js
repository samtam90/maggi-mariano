import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Giano dell'Umbria",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Giano dell'Umbria", 
    locationNames: {label: "Giano dell'Umbria", href: "giano-dell-umbria"}  
});