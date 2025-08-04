import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fucecchio",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});