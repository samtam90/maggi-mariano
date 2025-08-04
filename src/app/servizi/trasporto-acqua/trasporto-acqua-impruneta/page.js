import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Impruneta",
});
export default withBaseProps({ 
    title: "Trasporto acqua Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});