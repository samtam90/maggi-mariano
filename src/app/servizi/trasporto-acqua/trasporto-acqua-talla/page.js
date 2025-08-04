import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Talla",
});
export default withBaseProps({ 
    title: "Trasporto acqua Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});