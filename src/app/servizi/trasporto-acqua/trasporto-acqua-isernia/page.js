import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Isernia",
});
export default withBaseProps({ 
    title: "Trasporto acqua Isernia", 
    locationNames: {label: "Isernia", href: "isernia"}  
});