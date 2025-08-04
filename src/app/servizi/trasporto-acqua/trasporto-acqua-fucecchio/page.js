import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Fucecchio",
});
export default withBaseProps({ 
    title: "Trasporto acqua Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});