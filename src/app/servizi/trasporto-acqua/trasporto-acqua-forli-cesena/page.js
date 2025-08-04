import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Forlì-Cesena",
});
export default withBaseProps({ 
    title: "Trasporto acqua Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"}  
});